const User = require("../models/user");     //Good practice to name the variable as defined in models like "User"

exports.signup = (req, res) => {
    const user = new User(req.body);        //Creating User class object "user"
    user.save((err, user) => {              //Saving a user
        if (err){
            return res.status(400).json({
                err: "Not able to save user in db"
            })
        }
        res.json({
            name : user.name,
            email: user.email,
            id: user._id
        });
    })                     
};

exports.signout = (req, res) => {    //To export multiple modules we use "exports
    res.json({                   
        message: "User Signout"
    });
};

//exports.signup = (req, res) => {
//   console.log("REQ BODY", req.body);  //handle json response 
//    res.json({
//        message: "Signup route works!"
//    });
//};