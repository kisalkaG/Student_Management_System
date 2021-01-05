const express = require("express");
const Route = express.Router();
const con = require("./DBConnection");

Route.post("/add_new_student", (req, res) => {
  let query = `INSERT INTO student_information (name,address,birthday,attendance_date,name_of_owner)
    VALUES ('${req.body.name}','${req.body.address}','${req.body.birthday}','${req.body.attendance_date}','${req.body.name_of_owner}')`;

  con.query(query, (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(`Error: ${err} occured.`);
    }
  });
});

Route.get("/get_student", (req, res) => {
  let query = `SELECT * FROM student_information`;

  con.query(query, (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(`Error: ${err} occured.`);
    }
  });
});

Route.post("/update-student", (req, res) => {
  console.log(req.body);
  let query = `UPDATE student_information
    SET name = '${req.body.name}', address= '${req.body.address}', birthday= '${req.body.birthday}', attendance_date= '${req.body.attendance_date}',
    name_of_owner= '${req.body.name_of_owner}'
    WHERE id = '${req.body.id}'`;

  con.query(query, (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(`Error: ${err} occured.`);
    }
  });
});

Route.post("/delete-student", (req, res) => {
  console.log(req.body);
  let query = `DELETE FROM student_information WHERE id='${req.body.id}'`;

  con.query(query, (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(`Error: ${err} occured.`);
    }
  });
});

Route.post("/fee-management", (req, res) => {
  // console.log(req.body);
  let query = `INSERT INTO fee_management (action,id,name,grade,school_fee,other_fee,additional_fee,total_fee,amount_paid,rest_of_amount) VALUES
    ('${req.body.action}','${req.body.id}','${req.body.name}','${req.body.grade}','${req.body.school_fee}','${req.body.other_fee}','${req.body.additional_fee}',
    '${req.body.school_fee}' + '${req.body.other_fee}' + '${req.body.additional_fee}','${req.body.amount_paid}',
    '${req.body.school_fee}' + '${req.body.other_fee}' + '${req.body.additional_fee}'-'${req.body.amount_paid}')`;

  con.query(query, (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(`Error: ${err} occured.`);
    }
  });
});

Route.get("/get_student_fee", (req, res) => {
  let query = `SELECT * FROM fee_management`;

  con.query(query, (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(`Error: ${err} occured.`);
    }
  });
});

module.exports = Route;
