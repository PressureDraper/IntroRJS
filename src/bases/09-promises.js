// promises async actions

import { getHeroById } from "./bases/08-import-export";

// const promise = new Promise((resolve, reject) => {
//     const heroe = getHeroById(2);
//     resolve(heroe);
//     // reject('Heroe was not found');
// });

// promise.then((heroe) => {
//     console.log("Heroe", heroe);
// })
// .catch( err => console.warn( err ));

const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        const heroe = getHeroById( id );

        if (heroe) {
            resolve(heroe);
        } else {
            reject('Heroe was not found'); 
        }
    });
}

// getHeroByIdAsync(4).then( heroe => console.log(heroe)).catch( err => console.warn(err));

getHeroByIdAsync(4).then( console.log ).catch( console.warn );