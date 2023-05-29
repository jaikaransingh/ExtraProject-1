const express = require('express');
const router = express.Router();
const cardController= require("../controller/cardController");
const customerController = require("../controller/customerController")

router.post("/card",cardController.createCard  )
router.get("/card", cardController.getAllCards)
//The userId is sent by front end
router.post("/customer", customerController.createPost)
router.get("/customer", customerController.getCustomer)
router.delete("/customer", customerController.deletePost)
module.exports = router;