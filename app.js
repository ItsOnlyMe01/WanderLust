if(process.env.NODE_ENV!="production"){
require('dotenv').config()
}


const express=require("express");
const mongoStore=require("connect-mongo");
const mongoose=require("mongoose");
const app=express();
const path=require("path");
const methodOverride=require("method-override");
const ejsMate=require("ejs-mate");

const dbUrl=process.env.ATLASDB_URL;



const ExpressError=require("./public/utils/ExpressError.js");
const session=require("express-session")

const listingsRouter=require("./routes/listing.js");
const reviewsRouter=require("./routes/review.js");
const userRouter=require("./routes/user.js")
// const cookie= require("express-session/session/cookie.js");
const flash= require("connect-flash");
const passport=require("passport");
const Localstrategy=require("passport-local");
const User=require("./models/user.js");



main()
   .then(()=>{
        console.log("connected to db");
})
    .catch((err)=>{
    console.log(err);
});

async function main() {
    await mongoose.connect(dbUrl);
}
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine('ejs',ejsMate);
app.use(express.static(path.join(__dirname,"/public")));


const store=mongoStore.create({
    mongoUrl:dbUrl,
    crypto:{
           secret:process.env.SECRET,
    },
    touchAfter:24*3600,
});

store.on("error",()=>{
     console.log("error in mongo session store",err);
});
 
const sessionOptions={
    store,
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires:Date.now()+7*24*60*60*1000,
        maxage:7*24*60*60*1000,
        httpOnly:false,
    },
};


// app.get("/",(req,res)=>{
//     res.send("hi i am root");
// });


app.use(session(sessionOptions));
app.use(flash());


app.use(passport.initialize());
app.use(passport.session());
passport.use(new Localstrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// app.get("/demouser",async(req,res)=>{
//     let fakeUser=new User({
//         email:"student123@gmail.com",
//         username:"delta-user"
//     });
//     let registeredUser=await User.register(fakeUser,"helloWorld");
//     res.send(registeredUser);
// });

app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.currUser=req.user;
    next();
})


app.use("/",userRouter);
app.use("/listings",listingsRouter);
app.use("/listings/:id/reviews",reviewsRouter);



app.all('*',(req,res,next)=>{
    next(new ExpressError(404,"page not found!"));
});


// error Handling
app.use((err,req,res,next)=>{
       let{statuscode=505,message="Something went wrong!"}=err;
      res.status(statuscode).send(message);
});



app.listen(8080,()=>{
    console.log("server is listening to port 8080");
});



