const router = require("express").Router();

const userRoutes = require("./User-Routes.js");

router.use("/Users", userRoutes);

module.exports = router;
