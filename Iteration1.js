/* 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
console.log(). Para ello, es necesario que crees un .html y un .js. */

fetch("https://api.agify.io?name=michael")
	.then((data) => data.json())
	.then((data) => console.log(data));

/* 1.2 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
fetch() para hacer una consulta a la api cuando se haga click en el botón, 
pasando como parametro de la api, el valor del input. */
const removeElement = (elem) => {

    elem.remove()

}

const pintar = (data) => {

    const responseDiv$$ = document.createElement("div")
    const removeButton$$ = document.createElement("button")
    const respuesta$$ = document.createElement("p");
    const infoRespuesta = [];
    
    for (country of data.country) {
        country.probability = (country.probability * 100).toFixed(1)
        infoRespuesta.push(country);
        console.log(infoRespuesta);
    }
    
    respuesta$$.innerText = `El nombre ${data.name} tiene un ${infoRespuesta[0].probability} porciento de ser de ${infoRespuesta[0].country_id}, un ${infoRespuesta[1].probability} porciento de ser de ${infoRespuesta[1].country_id}, un ${infoRespuesta[2].probability} porciento de ser de ${infoRespuesta[2].country_id}, un ${infoRespuesta[3].probability} porciento de ser de ${infoRespuesta[3].country_id} y un ${infoRespuesta[4].probability} porciento de ser de ${infoRespuesta[4].country_id}.` 
    
    removeButton$$.innerText = "X"
    removeButton$$.addEventListener("click", () => removeElement(responseDiv$$))

    responseDiv$$.appendChild(respuesta$$)
    responseDiv$$.appendChild(removeButton$$)

    document.body.appendChild(responseDiv$$)

}

const searchFunction = () => {
    
	fetch(`${baseUrl}/?name=${search$$.value}`)
		.then((data) => data.json())
		.then((data) => pintar(data))

}

const baseUrl = "https://api.nationalize.io";
const search$$ = document.querySelector("input");
const button$$ = document.querySelector("button");
button$$.addEventListener("click", () => searchFunction());

/* 1.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
de MZ. */

//! Hecho en el apartado 1.2

/* 1.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
de los p que hayas insertado y que si el usuario hace click en este botón 
eliminemos el parrafo asociado. */

//! Hecho en el apartado 1.2
