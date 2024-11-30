const express=require("express")
require('./connection')
var stdModel=require('./model/student')
var app=express();

app.use(express.json());

app.post('/add',async (req,res)=>{
    try {
        await stdModel(req.body).save()
        res.send("data added");
    } catch (error) {
        console.log(error);
    }
})
app.get('/view',async (req,res)=>{
    
    try {
       
       dataget= await stdModel.find()
        res.send(dataget);
      
    } catch (error) {
        console.log(error);
    }
})

app.delete('/del/:id',async (req,res)=>{
    
    try {
        await stdModel.findByIdAndDelete(req.params.id)
        res.send("deleted successfully");
      
    } catch (error) {
        console.log(error);
    }
})
app.put('/update/:id',async (req,res)=>{
    
    try {
        await stdModel.findByIdAndUpdate(req.params.id,req.body)
        res.send("updated successfully");
      
    } catch (error) {
        console.log(error);
    }
})
app.listen(3004,()=>{
    console.log("Port is running");
})