
const express = require('express');
const posts_controller = require('./controller/posts')
const app = express();
const host = 'http://127.0.0.1';
const port = 3000;


app.listen(port, () => {
    console.log(`listening on port ${host}:${port}`);
    
})

app.get('/', (req, res) => {
    res.send(`<h1>Benvenuto nel mio blog!</h1>`)
});


app.use(express.static('public'));

app.get('/posts', posts_controller.index)
