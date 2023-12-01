const express = require("express");

const router = express();

router.get("/", (req, res) => {
  res.send("estas en user");
});

module.exports = router;
