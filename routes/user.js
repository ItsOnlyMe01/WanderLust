const express=require("express");
const router=express.Router();

const wrapAsync = require("../public/utils/wrapAsync");
const Passport  = require("passport");
const { saveRedirectUrl } = require("./middleware.js");
const userController=require("../controller/user.js");


//signup route
router.get("/signup",userController.renderSignupForm);

router.post("/signup",wrapAsync(userController.signup));
//logiN Route
router.get("/login",userController.renderLoginForm);

router.post("/login",
    saveRedirectUrl,
    Passport.authenticate("local",{
    failureRedirect:"/login",
    failureFlash:true,
}),userController.login);


//logOut Route

router.get('/logout',userController.logOut);


module.exports=router;