function createUserRoutes(app){
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

    
}


module.exports = {
    createUserRoutes = createUserRoutes
 }