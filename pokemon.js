function Pokemon(nombre, color, puntosDeAtaque){
	this.nombrecito = nombre;
	this.colorcito = color;
	this.nivelDeAmistad = 0;
	this.vida = 100;
	this.puntosDeAtaque = puntosDeAtaque;

	this.saludar = function(){
		console.log("Hola, me llamo " + this.nombrecito);
	};
	this.pelear = function(pokemonObjeto){
		pokemonObjeto.vida = pokemonObjeto.vida - this.puntosDeAtaque
	};
}

pokemons=[];

function crearPokemon(){
	var nombrePokemon = document.getElementById("nombrePokemon")
	var colorPokemon = document.getElementById("colorPokemon");
	var ataquePokemon = document.getElementById("puntosDeAtaque")

	var pokemon = new Pokemon (nombrePokemon.value, colorPokemon.value, parseInt(puntosDeAtaque.value))
	//	console.log(nombrePokemon.value);
	//	console.log(colorPokemon.value);
	//	console.log(puntosDeAtaque.value);

		console.log(pokemon);
		pokemons.push(pokemon);

console.log(pokemons);
mostrarPokemons();

}

function mostrarPokemons(){

	var insertarPokemon = document.createElement("option");
	var nodoNuevo = nombrePokemon.value;
	insertarPokemon.setAttribute("value", nodoNuevo);
	console.log(insertarPokemon);
	var nuevoElemento = document.createTextNode(nodoNuevo);
	insertarPokemon.appendChild(nuevoElemento);

	document.getElementById("eleccionPokemon").appendChild(insertarPokemon);
}
