const express = require("express");
const clients = require("./clients.routes");
const enterprise = require("./enterpise.routes");
const admin = require("./admin.routes");

const router = express();

// router.use("/", (req, res) => res.send("estas en el enrutador"));
router.use("/clients", clients);
router.use("/enterprises", enterprise);
router.use("/admin", admin);

module.exports = router;
