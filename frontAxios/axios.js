
// LLAMADA A MI API LOCAL DE POKEMON CON FETCH

document.getElementById("pokemon").addEventListener("click",()=>{
    getPokemon()
})


async function getPokemon() {
    try {
        const pokemon_name = document.getElementById("name").value.toLowerCase();
        
        let url = `http://localhost:3000/pokemon/?name=${pokemon_name}`
        
        const params = {
            headers: {"Content-type": "application/json"}, 
            method: "GET" 
        }
        
        const data = await fetch(url, params);
        const result = await data.json();
        console.log(pokemon_name);

        console.log(result.res);
        
        document.getElementById("error").innerHTML = "";
        document.getElementById("nombre").innerHTML= result.res.name;
        document.getElementById("image").src = result.res.image;
        document.getElementById("Habilidades").innerHTML= result.res.abilities;
        document.getElementById("id").innerHTML= result.res.id;
        document.getElementById("peso").innerHTML= result.res.weight;
    }
    catch(error) {
        console.log(error)
        document.getElementById("error").innerHTML = "NO EXISTE";
        document.getElementById("nombre").innerHTML= "";
        document.getElementById("image").src = "../avatarpokemon.png";
        document.getElementById("Habilidades").innerHTML= "";
        document.getElementById("id").innerHTML= "";
        document.getElementById("peso").innerHTML= "";
    }
}