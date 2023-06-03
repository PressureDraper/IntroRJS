// import { heroes } from './data/heroes'

import heroes from "../data/heroes";

// console.table(heroes);

//lambda function
const getHeroById = (id) => {
    return heroes.find((hero) => hero.id === id);
}

// console.log(getHeroById(2));

const getHeroByOwner = (owner) => {
    return heroes.filter((hero) => hero.owner === owner);
}

// console.log(getHeroByOwner('Marvel'));

// console.log(expVar);

export {
    getHeroById,
    getHeroByOwner
}

 

