const express = require('express')
const app = express()
const path = require('path');

app.use(express.static(path.join(__dirname, "public")))
app.listen(80);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/', 'main.html'));
});

app.post('/631579451735264526567524327456756415294564527531975164516753157654716151564561567516', (req, res) => {
    console.log(req.body)
});
