
const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const bodyParser = require('body-parser');
const { users } = require('./state');

/* BEGIN - create routes here */

app.use(bodyParser.json())

app.get('/users', (req,res) => {
 res.json(users)
})

app.get('/users/:id', (req,res) => {
 let userByID = users[req.params.id - 1]
 res.send(userByID)
})

// app.post('/users', (req,res) => {
//  let newUser = {
//     "_id": 6,
//     "name": "David Castillo",
//     "occupation": "FullStack Developer",
//     "avatar": "https://upload.wikimedia.org/wikipedia/en/5/50/Agentdalecooper.jpg"
//  }
//  let updatedUsers = [...users, newUser]
//  res.json(updatedUsers)
// })

app.put('/users/:id', (req,res) => {
 let id = req.params.id - 1
 let pic = users[id].avatar
 delete users[id].avatar;
 users[id].picture = pic
 res.json(users[id])
});
 // users[req.params.id - 1].occupation = "Engineer"
 // res.json(users[req.params.id - 1])

app.delete('/users/:id', (req,res) => {
 id = req.params.id - 1
 users[id].isActive = 'false'
 res.json(users[id])
})

app.post('/users', (req,res) => {
counter = users.length + 1
req.body['_id'] = counter
users.push(req.body)
res.json(users)
})

/* END - create routes here */

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))