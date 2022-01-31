//import express
const express = require('express');
const path = require('path');
const students = require('./students');
//init express 
const app = express();
//change our data
app.use(express.json())

//create port 
const port = 7000;

//creating the server 
app.listen(port,(err)=> 
err? console.log(err):console.log(`server is now listening to ${port}...`));

// get all routes 
app.get('/about' , (req,res)=> {
    res.send('<h1>About</h1>')
})


app.get('/sendfile', (req,res)=> {
    res.sendfile('./index.html'); 
})
app.get('/*' , (req,res)=> {
    res.send('<h1>error 404</h1>')
})

app.post('/students', (req, res)=>{
    res.json(students)
})
app.post('/students/:id', (req, res)=>{
    res.json(students.filter(student=>student.id ===Number (req.params.id)))
})





