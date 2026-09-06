const express= require("express");
const router =express.Router();

const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/expressError.js");
const passport = require("passport");

const User=require("../models/user.js");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/users.js")

//SIGNUP ROUTES
router
    .route("/signup")
    .get( userController.renderSignupForm)
    .post(wrapAsync(userController.signup));

//LOGIN ROUTES
router
    .route("/login")
    .get( userController.renderLoginForm)
    .post(
    saveRedirectUrl,
    passport.authenticate("local", {
    failureRedirect: "/login", 
    failureFlash : true
    }), 
     userController.login);

//LOGOUT ROUTE
router.get("/logout", userController.logout);

module.exports = router;
