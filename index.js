const express = require('express');

const app = express();



app.post("/user/signup",function(res,req){
    res.json({
        message: "signup endpoint"
    })
})


app.post("/user/signin",function(res,req){
    res.json({
        message: "signup endpoint"
    })
})


app.get("/user/purchases",function(res,req){
    res.json({
        message: "signup endpoint"
    })
})

app.post("/user/purchase",function(res,req){
    res.json({
        message: "signup endpoint"
    })
})




app.post("/courses",function(res,req){
    res.json({
        message: "signup endpoint"
    })
})










app.listen(3000);