const router = require("express").Router();
const { User, Music } = require("../Models");

//test and good
router.get("/", async (req, res) => {
  res.render("homepage");
});

module.exports = router;
