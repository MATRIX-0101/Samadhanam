const { addMessage, getAllMessage } = require("../controllers/messagesController");

const router = require("express").Router();

router.post("/addmsg/",addMessage);
router.post("/getmsg/",getAllMessage);

<<<<<<< HEAD

module.exports = router; 
=======
module.exports = router;

>>>>>>> master
