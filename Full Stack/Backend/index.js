const express = require('express');
const app = express();

const Users = require('./data/user')

app.set("view engine", 'ejs');
app.use(express.urlencoded({extended: true}));

app.get('/',(req,res) =>{
    res.send('working fine')
})

app.get('/about',(req,res)=>{
    res.send('about page')
})

app.get('/cat',(req,res)=>{
    res.send('mewwww')
})

app.get('/users', (req, res) => {
    res.render('user', { Users });
})

app.get('/users/new', (req, res)=> {
    res.render('new');
})

app.post('/users', (req, res) => {
    const { username, password, city } = req.body;
    let x = Users[Users.length-1].id;
    const user = {
        id: x+1,
        username: username,
        password: password,
        city: city
    }

    Users.push(user);
    res.redirect('/users');
})

app.get('/*',(req,res)=>{
    res.send('404 page not found')
})


app.listen(4000);
console.log("app is listening on port 4000")