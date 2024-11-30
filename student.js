const mongoose=require('mongoose');
var schema=mongoose.Schema({
    Name:String,
    Regno:Number,
    Course:String,
    Duration:Number,
    Phno:Number

})
var StudentModel=mongoose.model("student",schema)
module.exports =StudentModel