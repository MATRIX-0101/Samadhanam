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
}