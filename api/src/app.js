const express = require('express');
const cors = require('cors');
const pokemonApiRoutes = require('./router/pokemonApi.router');


const app = express();

app.set('port', 3000);
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(pokemonApiRoutes)

module.exports = app;