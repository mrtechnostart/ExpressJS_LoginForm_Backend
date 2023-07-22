const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const {router} = require("./routes/route")
require("dotenv").config()



app.use(cors({
    origin:"*",
}))
app.use(express.json())
app.use("/",router)


const port = 2000
async function connect() {
    try {
      await mongoose.connect(process.env.MONGODB_CONNECTION_URI);
      app.listen(port, () => {
        console.log(`Listening at port ${port}`);
      });
    } catch (error) {
      console.log(error);
    }
  }
  connect();