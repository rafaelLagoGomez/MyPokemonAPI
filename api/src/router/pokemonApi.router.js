
const { Router } = require("express");
const router = Router();
const pokemonApiController = require("../controller/pokemonApi.controller");

router.get('/pokemon', pokemonApiController.getPokemon);

module.exports = router;