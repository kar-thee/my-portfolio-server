const SendMailController = require("../controller/SendMailController");

const router = require("express").Router();

router.post("/", SendMailController);

module.exports = router;
