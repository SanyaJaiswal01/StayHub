const express= require("express");
const router =  express.Router({mergeParams : true});
const Listing=require("../models/listing.js");
const Review=require("../models/review.js");
const wrapAsync=require("../utils/wrapAsync.js");
const {validateReview, isLoggedIn, isReviewAuthor, saveRedirectUrl} =require("../middleware.js")

const reviewController = require("../controllers/reviews")

//create new riview route
router.post("/", 
    isLoggedIn, 
    saveRedirectUrl,
    validateReview, 
    wrapAsync(reviewController.createReview));

// review delete route
router.delete("/:reviewId",
    isLoggedIn,
    isReviewAuthor, 
    saveRedirectUrl,
    wrapAsync(reviewController.destroyReview)); 

module.exports= router;
