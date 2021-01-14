const express = require("express");
const router = express.Router();
const connection = require("../config");

//GET
router.get("/", (req, res) => {
  connection.query("SELECT * FROM user", (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});


//POST
router.post("/", (req, res) => {
  const { firstname, lastname, email, password} = req.body;
  connection.query(
    "INSERT INTO user (firstname, lastname, email, password) VALUES(?,?,?,?)",
    [firstname, lastname, email, password],
    (err) => {
      if (err) {
        console.log(err);
        res
          .status(500)
          .send("user not created");
      } else {
        res.status(200).send("user created");
      }
    }
  );
});

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

router.put("/:id", (req, res) => {
  const newUser = req.body;
  const idUser= req.params.id;

  connection.query(
    "UPDATE user SET ? WHERE id = ?",
    [newUser, idUser],
    (err) => {
      if (err) {
        console.log(err);
        res.status(500).send("error updating user");
      } else {
        res.status(200).send("user successfully updated");
      }
    }
  );
});

module.exports = router;
