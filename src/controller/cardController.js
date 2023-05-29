const cardModel = require("../models/cardModel")

const getAllCards = async(req,res)=>{
    try {
        const cards = await cardModel.find()

        res.status(200).json({success: true, cards : cards})
    } catch (error) {
        console.log(error)
        res.status(500).json({success: false, error : error})
    }
}


const createCard = async(req,res)=>{
    try {
        const card = await cardModel.create(req.body)
        const populateCard = await card.populate('customerID')


        res.status(201).json({success: true, card : populateCard})
    } catch (error) {
        console.log(error)
        res.status(500).json({success: false, error : error})
    }
}

module.exports.getAllCards = getAllCards;
module.exports.createCard = createCard;