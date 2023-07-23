const express = require("express")
const router = express.Router()
const {getData,postData,getTask, deleteTask,updateTask} = require("../controllers/controls")


router.route("/").post(postData).get(getData)
router.route("/:id").get(getTask).delete(deleteTask).patch(updateTask)
module.exports = {
    router
}