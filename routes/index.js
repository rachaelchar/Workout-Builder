const router = require("express").Router();
const apiRoutes = require("./api/index");

router.use('/', apiRoutes);

module.exports = router;
