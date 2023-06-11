const express =require('express')
const app = express()
var cors = require('cors')
const port =process.env.port || 5001

app.use(cors())

const categories= require('./data/category.json')


app.get('/',(req,res)=>{
    res.send('hello');

});
app.get('/category',(req,res)=>{
    res.send(categories)
})

app.listen(port, ()=>{
    console.log('running',port);
})