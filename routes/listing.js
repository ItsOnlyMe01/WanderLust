const express=require("express");
const router=express.Router();
const wrapAsync=require("../public/utils/wrapAsync.js");
const {isLoggedIn,isOwner,validateListing}=require("../routes/middleware.js");
const listingController=require("../controller/listing.js");
const multer= require('multer')
const {storage}=require("../cloudConfig.js");
const upload = multer({storage });


//Index Route
router.get("/",wrapAsync(listingController.index));


//new route
router.get("/new",isLoggedIn,listingController.renderNewForm);

//show route
router.get("/:id",wrapAsync(listingController.showListing));


//Create Route

 router.post("/",isLoggedIn,upload.single('listing[image]'),validateListing,wrapAsync(listingController.createListing));
   
    
//Edit Route
    
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.renderEditForm));
    
    
//update route
router.put("/:id/",isLoggedIn,isOwner,upload.single('listing[image]'),validateListing,wrapAsync(listingController.updateListing));
    
//Delete Route
 router.delete("/:id",isLoggedIn,isOwner,wrapAsync(listingController.destroyListing));

module.exports=router;
    