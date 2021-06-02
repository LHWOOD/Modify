const router = require("express").Router();

const apiRoutes = require("./API");
const homeRoutes = require("./Home-Routes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);

module.exports = router;
