const router = require("express").Router();

router.use("/persona", require("./persona.route"));

module.exports = router;
