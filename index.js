const express =require('express')
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res)=>{
    res.send('I am sorry babe!!')
})

app.listen(port, ()=>{
    console.log('I am listening the port!!!', port)
})