const express =require('express')
const app = express()
var cors = require('cors')
const port =process.env.port || 5001

app.use(cors())

const categories= require('./data/category.json')
const courses=require('./data/course.json')


app.get('/',(req,res)=>{
    res.send('hello');

});
app.get('/category',(req,res)=>{
    res.send(categories)
})

app.get('/courses',(req,res)=>{
    res.send(courses)
})
app.get('/courses/:id',(req,res)=>{
    const id=req.params.id
   
    const selectedCourse=courses.find(c=>c._id==id)
    res.send(selectedCourse)

})


app.get('/category/:id',(req,res)=>{
    const id=req.params.id
   
    const selectedCategory=courses.filter(c=>c.id==id)
    res.send(selectedCategory)
})


app.listen(port, ()=>{
    console.log('running',port);
})