// const mongoose = require("mongoose")

// const ITech = new mongoose.Schema({
//     firstname:{
//         type:String,
//         trim:true
//     },
//     lastname:{
//         type:String,
//         trim:true
//     },
//     phone:{
//         type:String,
//         trim:true
//     },
//     dateOfBirth:{
//         type:String,
//         trim:true
//     },
//     email:{
//         type:String,
//         trim:true
//     },
//     password:{
//         type:String,
//         trim:true
//     },
// })

// module.exports = mongoose.model("Itech",ITech)

const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: "mrtechnostart",
  password: "rambpandey238@A",
  database: "ram",
  connectionLimit: 10,
});

async function createTable() {
  try {
    const connection = await pool.getConnection();
    await connection.query(`
      CREATE TABLE IF NOT EXISTS itech (
        id INT AUTO_INCREMENT PRIMARY KEY,
        firstname VARCHAR(255) NOT NULL,
        lastname VARCHAR(255) NOT NULL,
        phone VARCHAR(255) NOT NULL,
        dateOfBirth VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL
      )
    `);
    connection.release();
    console.log("Table 'itech' created or already exists.");
  } catch (error) {
    console.error("Error creating table:", error);
  }
}

createTable();

module.exports = pool;
