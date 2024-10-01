const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require("../public/utils/wrapAsync.js");

const {validateReview, isLoggedIn, isReviewAuthor}=require("./middleware.js");
const reviewController=require("../controller/review.js");

//post review route

router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReview));

//delete review route

router.delete("/:reviewId",isLoggedIn,isReviewAuthor,reviewController.destroyReview);
module.exports=router;
