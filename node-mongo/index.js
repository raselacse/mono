const express = require('express');
const app = express();
const port = 3000

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const user = ["rasel", "shawon", "alamin", "razib", "susmita", "suhana"]

app.get('/', (req, res) => {
    const fruit ={
        product: 'ada',
        price: '20'
    }
    res.send(fruit)
})

app.get('/fruits/banana', (req, res)=>{
    res.send({fruit: 'banana', price: '100', quantity: '18'})
})

app.get('/users/:id', (req, res)=>{
    // console.log(req.query.sort)
    const id = req.params.id;
    const users = user[id]
    // res.send(`${users}: ${id}`)
    res.send({id, users})
})

app.post('/addUser', (req, res)=>{
    // res.send('post request send')
    const user = req.body;
    user.id = 55;
    res.send(user)
    console.log(user);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})