//functions

const wave = function(name) {
    return `Hello, ${name}!`;
}

const wave2 = (name) => {
    return `Hello, ${name}!`
};

const wave3 = (name) => `Hello, ${name}!`;

const wave4 = () => `Hello world!`;

console.log( wave('Oscar') );

console.log( wave2('Omar') );

console.log( wave3('Liz') );

console.log(wave4());

// function getUser( name ) {
//     return {
//         uid: 124121,
//         username: name
//     }
// };

//implicit object
const getUser = (name) => ({
    uid: 12412123,
    username: name
});

const newObj = (num1, num2) => ({
    num1: num1,
    num2: num2
}); 

const user = getUser('Sahib');
console.log(user);

console.log(newObj(4,9));
