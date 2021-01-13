const express = require("express");
const router = express.Router();
const connection = require("../config");

router.get("/", (req, res) => {
  connection.query("SELECT * FROM user", (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});

// router.post("/", (req, res) => {
//   const { playlist_id, title, artist, album_picture, youtube_url } = req.body;
//   connection.query(
//     "INSERT INTO track (playlist_id, title, artist, album_picture, youtube_url) VALUES(?,?,?,?,?)",
//     [playlist_id, title, artist, album_picture, youtube_url],
//     (err) => {
//       if (err) {
//         console.log(err);
//         res
//           .status(500)
//           .send("C'est raté, la musique n'est pas dans la playlist..");
//       } else {
//         res.status(200).send("Good job, bonne écoute");
//       }
//     }
//   );
// });

// router.get("/:id/playlist", (req, res) => {
//   connection.query(
//     "SELECT * FROM track LEFT JOIN playlist ON track.playlist_id=playlist.id WHERE playlist.id=?",
//     [req.params.id],
//     (err, results) => {
//       if (err) {
//         console.log(err);
//         res.status(500).send("Error");
//       } else {
//         if (results === 0) {
//           return res.status(404).send(" not found");
//         } else {
//           res.json(results);
//         }
//       }
//     }
//   );
// });

// //pour virer la musique de la playlist sans la supprimer

// router.put("/:id/removeplaylist", (req, res) => {
//   const idPlaylist = req.params.id;

//   connection.query(
//     "UPDATE track SET playlist_id=null WHERE id = ?",
//     [idPlaylist],
//     (err) => {
//       if (err) {
//         console.log(err);
//         res.status(500).send("error pour enlever de la playlist");
//       } else {
//         res.status(200).send("enlevée de la playlist");
//       }
//     }
//   );
// });

// router.put("/:id", (req, res) => {
//   const newMusic = req.body;
//   const idMusic = req.params.id;

//   connection.query(
//     "UPDATE track SET ? WHERE id = ?",
//     [newMusic, idMusic],
//     (err) => {
//       if (err) {
//         console.log(err);
//         res.status(500).send("error updating music");
//       } else {
//         res.status(200).send("music successfully updated");
//       }
//     }
//   );
// });

module.exports = router;
