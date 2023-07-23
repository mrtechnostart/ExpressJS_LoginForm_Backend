const Itech = require("../models/model")

const postData = async (req,res)=>{
    try {
        const data = req.body
        const task = await Itech.create(data)
        res.status(201).json(task)
    } catch (error) {
        res.status(500).json({"error":error})
    }
}

const getData = async(req,res)=>{
    try{ 
        const tasks = await Itech.find({})
        res.status(200).json({tasks})
    }
    catch(e){
        res.status(500).json({e})
    }
}
const getTask = async (req, res) => {
    try {
        const { id: emailID } = req.params; 
        const task = await Itech.findOne({ email: emailID }); 
        if (!task) {
            return res.status(200).json({ status:false });
        }
        res.status(200).json({ ...task,status:true });
    } catch (e) {
        res.status(500).json({ e });
    }
};


module.exports = {
    getData,
    postData,
    getTask
}