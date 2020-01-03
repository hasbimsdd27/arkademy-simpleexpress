const express = require('express');
const path = require('path');
const app = express();
const port = 3001;
const router = express.Router();

// app = expres()
//.get (method)
//(path<string>,requestHandler(function)

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.get('/',(req, res) => {
    const { nama,ttl } = req.query; //cons data = req.query.data;
    res.render('index', { nama,ttl });
})

app.get('/create',(req, res) => {
    res.render('create');
});

app.get('/create/submit', (req, res) => {
    const { nama,ttl } = req.query;
    res.redirect('/?nama=' + nama + '&ttl=' + ttl) 
});

app.listen(port, () => {
    console.log('listening on port ' + port);
});