const pool = require("../models/model");

const postData = async (req, res) => {
  try {
    const data = req.body;
    const connection = await pool.getConnection();
    const [results] = await connection.query(
      "INSERT INTO itech (firstname, lastname, phone, dateOfBirth, email, password) VALUES (?, ?, ?, ?, ?, ?)",
      [data.firstname, data.lastname, data.phone, data.dateOfBirth, data.email, data.password]
    );
    connection.release();
    res.status(201).json({ ...data, id: results.insertId });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getData = async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [results] = await connection.query("SELECT * FROM itech");
    connection.release();
    res.status(200).json({ tasks: results });
  } catch (e) {
    res.status(500).json({ e });
  }
};

const getTask = async (req, res) => {
  try {
    const { id: emailID } = req.params;
    const connection = await pool.getConnection();
    const [results] = await connection.query("SELECT * FROM itech WHERE email = ?", [emailID]);
    connection.release();

    if (results.length === 0) {
      return res.status(200).json({ status: false });
    }
    res.status(200).json({ ...results, status: true });
  } catch (e) {
    res.status(500).json({ e });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: TaskId } = req.params;
    const connection = await pool.getConnection();
    const [results] = await connection.query("DELETE FROM itech WHERE id = ?", [TaskId]);
    connection.release();

    if (results.affectedRows === 0) {
      return res.status(201).json({ status: "failed", value: "Not Found" });
    }
    res.status(201).json({ status: "success", value: [TaskId] });
  } catch (e) {
    res.status(404).json(e);
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: TaskId } = req.params;
    const data = req.body;
    const connection = await pool.getConnection();
    const [results] = await connection.query("UPDATE itech SET ? WHERE id = ?", [data, TaskId]);
    connection.release();

    if (results.affectedRows === 0) {
      return res.status(404).json({ status: "failed", value: "Not Found" });
    }
    res.json({ ...data, id: TaskId });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getTaskById = async (req, res) => {
  try {
    const { id: ID } = req.params;
    const connection = await pool.getConnection();
    const [results] = await connection.query("SELECT * FROM itech WHERE id = ?", [ID]);
    connection.release();

    if (results.length === 0) {
      return res.status(200).json({ status: false });
    }
    res.status(200).json({ ...results, status: true });
  } catch (e) {
    res.status(500).json({ e });
  }
};

module.exports = {
  getData,
  postData,
  getTask,
  deleteTask,
  updateTask,
  getTaskById,
};
