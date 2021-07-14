const router = require("express").Router();
const authorize = require("../middleware/authorize");
const pool = require("../db");

//all todos and name
router.get("/", authorize, async (req, res) => {
    console.log('[OLA]',req)
})

module.exports = router;