const express = require("express");
const router = express.Router();
const connection = require("../config");

router.get("/", (req, res) => {
  connection.query("SELECT * FROM recette", (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});

router.post("/", (req, res) => {
  const { category, name, time, date, image, ingredients, tools, chef, level, people, preparationtime } = req.body;
  connection.query(
    "INSERT INTO recette (category, name, time, date, image, ingredients, tools, chef, level, people, preparationtime) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [category, name, time, date, image, ingredients, tools, chef, level, people, preparationtime ],
    (err) => {
      if (err) {
        console.log(err);
        res.status(500).send("erreur");
      } else {
        res.status(200).send("live recette programmé");
      }
    }
  );
});

router.delete("/:id", (req, res) => {
  const recette = req.params.id;
  connection.query("DELETE FROM recette WHERE id=?", [recette], (err) => {
    if (err) {
      res.status(500).send("No, recette still there");
    } else {
      res.status(200).send("ciao la recette");
    }
  });
});



// router.get("/:id", (req, res) => {
//   const id = req.params.id;
//   connection.query(
//     "SELECT * FROM playlist WHERE id = ?",
//     [id],
//     (err, results) => {
//       if (err) {
//         res.sendStatus(500);
//       } else {
//         res.json(results);
//       }
//     }
//   );
// });

// router.get("/tracks/:id", (req, res) => {
//   const id = req.params.id;
//   connection.query(
//     "SELECT * FROM track WHERE playlist_id = ?",
//     [id],
//     (err, results) => {
//       if (err) {
//         res.sendStatus(500);
//       } else {
//         res.json(results);
//       }
//     }
//   );
// });

// router.post("/", (req, res) => {
//   const { title, genre } = req.body;
//   connection.query(
//     "INSERT INTO playlist (title, genre) VALUES(?, ?)",
//     [title, genre],
//     (err) => {
//       if (err) {
//         console.log(err);
//         res.status(500).send("Playlist pas crée");
//       } else {
//         res.status(200).send("Cool, go ajouter des sons !!!");
//       }
//     }
//   );
// });



// router.put("/:id", (req, res) => {
//   const newPl = req.body;
//   const idPlaylist = req.params.id;

//   connection.query(
//     "UPDATE playlist SET ? WHERE id = ?",
//     [newPl, idPlaylist],
//     (err) => {
//       if (err) {
//         console.log(err);
//         res.status(500).send("error updating playlist");
//       } else {
//         res.status(200).send("playlist successfully updated");
//       }
//     }
//   );
// });

module.exports = router;
