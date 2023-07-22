const express = require("express")
const router = express.Router()
const {getData,postData,getTask} = require("../controllers/controls")


router.route("/").post(postData).get(getData)
router.route("/:id").get(getTask)
module.exports = {
    router
}