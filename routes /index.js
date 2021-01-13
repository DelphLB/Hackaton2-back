const express = require("express");
const router = express.Router();

const playlists = require("./playlists");
const tracks = require("./tracks");

router.use("/playlists", playlists);
router.use("/tracks", tracks);
router.get("/", (req, res) => {
  res.send("OK");
});
module.exports = router;
