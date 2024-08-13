const {app:App} = require("./app.js");  //extract key app from object and rename it as "App"
const {connectDb} = require("./src/db/index.js");
const {User} = require("./src/models/Auth.Model.js");

connectDb().then( 
    App.listen(8000,()=>{
        console.log("server is running at port : 8000")
    })
).catch((error)=>{
    console.log("MONGODB conneciton failed: ",error)
})