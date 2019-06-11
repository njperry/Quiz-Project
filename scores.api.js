"use strict";
const express = require("express");
const router = express.Router();
const pool = require("./connection");

function selectAll(res) {
  pool.query("SELECT * FROM scores").then(result => {
    res.json(result.rows);
  });
};

router.get("/scores", (req, res) => {
  selectAll(res);
});

router.post("/scores", (req, res) => {
    pool.query("insert into scores (username, scores) values ($1::text, $2::int)", [
        req.body.username,
        req.body.scores
    ]).then(() => {
        selectAll(res);
    });
});

// router.post("/scores", (req, res) => { //add method
//     pool
//         .query("insert into scores (username) values ($1::text)", [
//             req.body.username
//         ]).then(() => {
//             selectAll(res);
//         });
    
//     // console.log(req.body);
//     // animalList.push(req.body);
//     // res.json(animalList);
// });

module.exports = router;