const User = require("../model/userModel" );
const brcypt = require("bcrypt");

module.exports.register = async (req,res,next) => {
    try{
        console.log(req.body);
        const { firstname,lastname,password,emailID,gender,year,hostel,phonenumber,registrationnumber,course,problemsynopsis } = req.body;
        const emailIDCheck = await User.findOne({ emailID });
        if(emailIDCheck)
            return res.json({msg: "Email already used", status: false});
        const hashedpassword = await brcypt.hash(password,10);
        const user = await User.create({
            firstname,
            lastname,
            password: hashedpassword,
            emailID,
            gender,
            year,
            hostel,
            phonenumber,
            registrationnumber,
            course,
            problemsynopsis,
        });
        delete user.password;
        return res.json({ user,status: true }); 
    } catch (ex) {
        next(ex);
    }

};

module.exports.setAvatar = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const avatarImage = req.body.image;
        const userData = await User.findByIdAndUpdate(userId, {
            isAvatarImageSet: true,
            avatarImage,
        });
        return res.json({
            isSet: userData.isAvatarImageSet,
            image: userData.avatarImage,
        });
    } catch(ex) {
        next(ex);
    }
};

module.exports.login = async (req,res,next) => {
    try{
        console.log(req.body);
        const { emailID,password } = req.body;
        const emailcheck = await User.findOne({ emailID });
        if(!emailcheck)
            return res.json({msg: "Incorrect username and password", status: false});
        const isPasswordValid = await  brcypt.compare(password,user.password);
        if(!isPasswordValid)
            return res.json({msg: "Incorrect username and password", status: false});
        
        
        
        delete user.password;
        return res.json({ user,status: true }); 
    } catch (ex) {
        next(ex);
    }

};


module.exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({ _id: { $ne: req.params.id }}).select([
            "emailID",
            "firstname",
            "lastname",
            "registrationnumber",
            "avatarImage",
            "_id",
        ]);
        return res.json(users);
    } catch(ex) {
        next(ex);
    }
};