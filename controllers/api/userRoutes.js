const router = require("express").Router();
const { User } = require("../../models");

// get all users //tested all good
router.get("/", (req, res) => {
  User.findAll({
    attributes: {
      exclude: ["password"],
    },
  })
    .then((userData) => res.json(userData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/getSongs", (req, res) => {
  User.findByPk(req.session.user_id).then((dbUser) => {
    dbUser
      .getSongs() // returns a list of the user's liked songs
      .then((songsList) => {
        res.json(songsList);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });
});

//get one user //tested all good
router.get("/:id", (req, res) => {
  User.findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: req.params.id,
    },
    include: ["songs"],
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

//create user //tested all good
router.post("/", (req, res) => {
  User.create({
    username: req.body.username,
    password: req.body.password,
  })
    .then((userData) => {
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.username = userData.username;
        req.session.loggIn = true;
        res.json(userData);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//login //tested all good
router.post("/login", (req, res) => {
  //test
  User.findOne({
    where: {
      username: req.body.username,
    },
  }).then((userData) => {
    if (!userData) {
      res.status(400).json({
        message: "No user with that username",
      });
      return;
    }
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.loggIn = true;
      res.json({
        user: userData,
        message: "You are now logged in",
      });
    });

    const validPassword = userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({
        message: "Incorrect password",
      });
      return;
    }
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.loggIn = true;
      res.json({
        user: userData,
        message: "You are now logged in",
      });
    });
  });
});

router.post("/logout", (req, res) => {
  if (req.session.loggIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
