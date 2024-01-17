const router = require("express").Router();
const {
  getAll,
  getPerson,
  createPerson,
} = require("../controllers/persona.controller");

router.get("/all", getAll);
router.get("/:id", getPerson);
router.post("/", createPerson);

module.exports = router;
