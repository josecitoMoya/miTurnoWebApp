const express = require("express");
const router = express();

router.use("/", (req, res) => {
  res.send("estas en empresas");
});

module.exports = router;
