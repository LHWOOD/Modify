const router = require("express").Router();
const { Music, User } = require("../../Models");

// get all music //tested all good
router.get("/", (req, res) => {
  Music.findAll({
    attributes: {
      exclude: ["web_url", "img_url"],
    },
  })
    .then((userData) => res.json(userData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get one song
router.get("/:id", (req, res) => {
  Music.findOne({
    attributes: { exclude: ["web_url", "img_url"] },
    where: {
      id: req.params.id,
    },
  })
    .then((userData) => {
      if (!userData) {
        res.status(404).json({
          message: "No user found",
        });
        return;
      }
      res.json(userData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
