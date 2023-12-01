const express = require("express");
const user = require("./clients.routes");
const enterprise = require("./enterpise.routes");
const admin = require("./admin.routes");

const router = express();

router.use("/user", user);
router.use("/enterprises", enterprise);
router.use("/admin", admin);

module.exports = router;
