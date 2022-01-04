const router = require("express").Router();
const controllers = require("../controllers/index.js");

router.get("/title", controllers.getData);

module.exports = router;