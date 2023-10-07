const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.get('/',(req, res) => {
    res.send('check');
})

app.listen(3000, () => {
    console.log(`Listening on port ${PORT}`);
})