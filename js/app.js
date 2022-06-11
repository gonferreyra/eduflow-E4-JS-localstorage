import { pizzas } from "./array.js";
import { showCard } from "./card.js";
import { errorMessage } from "./error.js";

// Variables
const btnInput = document.querySelector('.btnInput');
export const result = document.querySelector('.container');
const numberInput = document.querySelector('.numberInput');


document.addEventListener('DOMContentLoaded', () => {
    // Send array to localstorage
    localStorage.setItem('pizzas', JSON.stringify(pizzas));
    btnInput.addEventListener('click', searchLocalStorage);
});


const searchLocalStorage = () => {

    let pizzasFromLocal = JSON.parse(localStorage.getItem('pizzas'));
    // console.log(pizzasFromLocal);

    // Devuelve al array que corresponde al Id ingresado y lo guarda en la constante
    const searchId = pizzasFromLocal.find((pizza) => pizza.id == numberInput.value);

    // console.log(searchId);

    if (numberInput.value == '') {
        errorMessage('Debe ingresar un numero para la busqueda');
        return;
    } else if (searchId == undefined) {
        errorMessage('Numero de pizza no encontrado. Ingrese otro numero');
        return;
    }

    showCard(searchId);

};