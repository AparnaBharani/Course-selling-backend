 function createCourseRoutes(app){
    app.post("/user/purchase",function(res,req){
        res.json({
            message: "signup endpoint"
        })
    })




app.post("/course/preview",function(res,req){
        res.json({
            message: "signup endpoint"
        })
    })


 }

 module.exports = {createCourseRoutes}