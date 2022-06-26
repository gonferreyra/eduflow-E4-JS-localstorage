import { result, spinnerDiv } from "./app.js";

export const showCard = (searchId) => {

    cleanHTML();

    const { ingredientes, nombre, precio, img } = searchId;
    const div = document.createElement('div');

    // Spinner
    spinnerDiv.classList.remove('hidden')

    setTimeout(() => {
        cleanHTML()
        spinnerDiv.classList.add('hidden')
        div.classList.add('result-container');
        div.innerHTML = `
                    <h2>${nombre}</h2>
                    <p>Ingredientes: ${ingredientes}</p>
                    <p>Precio: $${precio}</p>
                    <img src='${img}'>
                    `
        result.appendChild(div);
    }, 2000);

};

export const cleanHTML = () => {
    while (result.firstChild) {
        result.removeChild(result.firstChild)
    }
};