const express=require('express');
const app=express();
const port=3000;
app.use(express.static());
app.get('/registration',(req,res)=>{
res.status(200).json({message:"registerd"});

});
app.put('/registration',(req,res)=>{
    const updatetake=req.body();
    res.send(updatetake);
});
app.post('/registration',(req,res)=>{
    console.log("posted")
})
app.delete('/registration/:id',(res,req)=>{
console.log("deleted the post")
})
app.listen(port,(req,res)=>console.log(res.send('http://localhost/${port}')));