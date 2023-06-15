const { register } = require("../controllers/usersController");
const { setAvatar } = require("../controllers/usersController");

const router = require("express").Router();

router.post("/register",register);

router.post("/setAvatar/:id", setAvatar);
module.exports = router;

