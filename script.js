async function fetchPika() {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
      .then((response) => response.json())
      .then((data) => {
        const number = data.id;
        const name = data.name;
        const image = data.sprites.front_default;
        const type = data.types[0].type.name;
        const pikachu = document.getElementById("PokemonWrapper")

        if(pikachu == undefined){

          const body = document.getElementsByTagName("body")[0];
          const wrapper = document.createElement("div");
          const divPika = document.createElement("div");
          const divPikaBody = document.createElement("div");
          const pikaNum = document.createElement("h2");
          const pikaName = document.createElement("h2");
          const pikaIMG = document.createElement("img");
          const pokemonType = document.createElement("p");
  
          wrapper.classList.add("container" , "centered")
          divPika.classList.add("card")
          divPikaBody.classList.add("card-body")

          wrapper.setAttribute("id","PokemonWrapper")
          divPika.setAttribute("id","Pokediv") 
          pikaNum.innerText = number;
          pikaName.innerText = name;
          pikaIMG.src = image;
          pokemonType.innerText = `Type: ${type}`;
  
          body.appendChild(wrapper);
          wrapper.appendChild(divPika);
          divPika.appendChild(pikaNum);
          divPika.appendChild(divPikaBody)
          divPikaBody.appendChild(pikaIMG);
          divPikaBody.appendChild(pikaName);
          divPikaBody.appendChild(pokemonType);
        }
        else{
          console.log("satu aja jangan banyak banyak");
        }
        }
      );
  }
  