const express = require("express");
const router = express.Router();
const { fiboCalculate , test} = require("../Controllers/fibo")
router.post("/fibo",fiboCalculate);
router.get("/fibo",test);
module.exports = router;