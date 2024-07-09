const express = require("express");
const UserControler = require("../controllers/user.controller");

const router = express();

router.post("/register", UserControler.register);
router.post("/login", UserControler.login);


module.exports = router;