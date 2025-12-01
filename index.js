const express = require('express');

const app = express();

const users = [
    {
        'id' : 1,
        'name' : 'John',
        'age' : 30,
        'mobile ': 9999999999
    }
]

app.post("/createUser",(req,res)=>{
    const()
})



// app.get("/hello",(req,res)=>{
//     res.send('hello world')
// })

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
