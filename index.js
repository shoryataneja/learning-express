const express = require('express');
const app = express();
const user = []
app.use(express.json())

app.get('/getUserById/:id', (req, res) => {
    const id = req.params.id;
    const user = user.find((user) => user.id === id)
    res.send(user)
})

// app.post("/createUser",(req,res)=>{
//     // const(name,age,mobile) = req.body;
// })
app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
