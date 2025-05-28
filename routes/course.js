const { Router } = require("express");
const courseRouter = Router();


courseRouter.post("/course/purchase",function(res,req){
    res.json({
        message: "signup endpoint"
    })
})




courseRouter.post("/course/preview",function(res,req){
    res.json({
        message: "signup endpoint"
    })
})




 module.exports = {
    courseRouter : courseRouter
 }