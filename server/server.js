const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3000;
const app = express();

app.use(express.static('dist'))
app.use(bodyParser.json());

app.get('/hello', (req, res) => {
    res.send('Hello, world!');
});

app.post('/', (req, res) => {
    console.log(JSON.stringify(req.body));
    res.send({ status: 200 })
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
