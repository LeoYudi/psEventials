require('./database');

const express = require('express');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);

app.use('/insomnia.json', express.static(path.resolve(__dirname, '..', 'docs', 'insomnia.json')));
app.use('/docs', express.static(path.resolve(__dirname, '..', 'docs')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`server running on port ${PORT}`) });