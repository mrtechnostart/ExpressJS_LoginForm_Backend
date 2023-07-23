const express = require("express")
const router = express.Router()
const {getData,postData,getTask, deleteTask,updateTask,getTaskById} = require("../controllers/controls")


router.route("/").post(postData).get(getData)
router.route("/:id").get(getTask).delete(deleteTask).patch(updateTask)
router.route("/getId/:id").get(getTaskById)
module.exports = {
    router
}