// const express = require("express")
// const app = express()
// const cors = require("cors")
// const mongoose = require("mongoose")
// const {router} = require("./routes/route")
// require("dotenv").config()



// app.use(cors({
//     origin:"*",
// }))
// app.use(express.json())
// app.use("/",router)


// const port = 2000
// async function connect() {
//     try {
//       await mongoose.connect(process.env.MONGODB_CONNECTION_URI);
//       app.listen(port, () => {
//         console.log(`Listening at port ${port}`);
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   connect();

const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql2/promise");
const { router } = require("./routes/route");
require("dotenv").config();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/", router);

const port = 2000;

async function connect() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    });
    app.locals.db = connection;
    app.listen(port, () => {
      console.log(`Listening at port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

connect();
