const router = require("express").Router();
const { User, Music } = require("../Models");

router.get("/", async (req, res) => {
  res.render("homepage");
});

module.exports = router;
