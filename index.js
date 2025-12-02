const express = require('express');
const app = express();
const users = []
app.use(express.json())

app.get('/getUserById/:id', (req, res) => {
    const {id} = req.params;

    let user;
    for(let i = 0; i < users.length; i++){
        if(users[i].id === id){
            return res.status(200).json(users[i]);
        }
    } 

})

// app.post("/createUser",(req,res)=>{
//     // const(name,age,mobile) = req.body;
// })
app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
