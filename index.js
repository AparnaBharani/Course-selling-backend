const express = require('express');
const { userRouter } = require("./routes/user")
const { createCourseRoutes, courseRouter } = require("./routes/course")
const app = express();


app.use("api/v1/user",userRouter);
app.use("api/vi/course",courseRouter)








app.listen(3000);