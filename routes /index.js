const express = require("express");
const router = express.Router();

const playlists = require("./users");
const tracks = require("./recettes");

router.use("/users", playlists);
router.use("/recettes", tracks);
router.get("/", (req, res) => {
  res.send("OK");
});
module.exports = router;
