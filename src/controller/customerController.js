const customerModel = require("../models/customerModel")


const getCustomer = async (req, res) => {
    try {
        const customers = await Customer.find({status : "ACTIVE"})

        res.status(200).json({success : true, customer : customers})

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            error: error
        })
    }
}



const createPost = async (req, res) => {
    try {
        const customer = await Customer.create(req.body)


        res.status(201).json({
            success: true,
            customer: customer
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            error: error
        })
    }
}




const deletePost = async (req, res) => {
    try {
        const { id } = req.params


        const deletedCustomer = await Customer.findByIdAndDelete(id)


        res.status(200).json({success : true, deletedCustomer : deletedCustomer})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            error: error
        })
    }
}

module.exports.getCustomer = getCustomer;
module.exports.createPost = createPost;
module.exports.deletePost = deletePost;