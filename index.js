const express = require('express');
const app = express();
const port = process.env.Port || 5000;
const cors = require('cors');

app.use(cors());
app.use(express.json());
// const handler = (req, res) => {
//     res.send('Hello world');
// };
const users = [
    {id: 0, name: "Monisha", age: 24, phone: '01488888888'},
    {id: 1, name: "Moni", age: 26, phone: '01488888888'},
    {id: 2, name: "Zara", age: 25, phone: '01488888888'},
    {id: 3, name: "Sinthiya", age: 23, phone: '01488888888'},
    {id: 4, name: "Liza", age: 22, phone: '01488888888'},
    {id: 5, name: "Nafiya", age: 21, phone: '01488888888'}
]

// api,Method
app.post("/users", (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    // res.send(JSON.stringify(newUser))
    res.json(newUser);
})

// dynamic api
app.get("/", (req, res) => {
  res.send("Hello from Node!");
});

app.get("/users", (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }
    
});

app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.listen(port, () => {
    console.log('Listening to', port);
})