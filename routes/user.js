const { Router } = require("express");



const userRouter = Router();

userRouter.post("/user/signup",function(res,req){
    res.json({
        message: "signup endpoint"
    })
})


userRouter.post("/user/signin",function(res,req){
    res.json({
        message: "signup endpoint"
    })
})


userRouter.get("/user/purchases",function(res,req){
    res.json({
        message: "signup endpoint"
    })
})

module.exports = {
    userRouter : userRouter
}