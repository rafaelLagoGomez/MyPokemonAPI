
// LLAMADA A LA API EXTERNA DE POKEMON CON AXIOS

const axios = require("axios");

async function getPokemon(request,response){   
    const name= request.query.name;
    const url=`https://pokeapi.co/api/v2/pokemon/${name}`

    try {
        const data = await axios.get(url);

        console.log(data)

        const res = {
            name: data.data.name,
            image: data.data.sprites.front_default,
            abilities: data.data.abilities.map(ability => `${ability.ability.name}`).join(' & '),
            id: data.data.id,
            weight: data.data.weight          
        }

        response.send({ error: false, code: 200, res })
    }
    catch(error) {
        console.log(error)
        response.send({ error: true, code: 400})
    }
}

module.exports = {getPokemon}
