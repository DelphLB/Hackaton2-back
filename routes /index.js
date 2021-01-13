const express = require("express");
const router = express.Router();

const playlists = require("./users");
const tracks = require("./recettes");
const twilio = require("./twilio");

router.use("/users", playlists);
router.use("/recettes", tracks);
router.use("/twilio", twilio);
router.get("/", (req, res) => {
  res.send("OK");
});
module.exports = router;
