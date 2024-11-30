const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Keerthana:keerthana@cluster0.cqz16.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Connected")
})
.catch((err)=>{
    console.log(err)
})