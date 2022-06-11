import { cleanHTML } from "./card.js";
import { result } from "./app.js";

export function errorMessage(error) {
    cleanHTML();
    const errorMesage = document.createElement('p');
    errorMesage.textContent = error;
    errorMesage.classList.add('error');

    //Insertarlo en el contenido HTML
    result.appendChild(errorMesage);

    // Elimina la alerta despues de 3 segundos
    setTimeout(() => {
        errorMesage.remove();
    }, 3000);
};