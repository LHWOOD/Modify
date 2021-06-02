const router = require("express").Router();

const userRoutes = require("./User-Routes.js");
const dashboardRoutes = require("./DashboardRoute.js");

router.use("/Users", userRoutes);
router.use("/Dashboards", dashboardRoutes);

module.exports = router;
