const router = require("express").Router();

//test and good
router.get("/", async (req, res) => {
  if (req.session.loggIn) {
    res.redirect("/dashboard");
    return;
  }

  res.render("homepage", {
    loggIn: req.session.loggIn,
  });
});

router.get("/signup", async (req, res) => {
  res.render("signup", {
    loggIn: req.session.loggIn,
  });
});

router.get("/dashboard", async (req, res) => {
  res.render("dashboard", {
    loggIn: req.session.loggIn,
  });
});

module.exports = router;
