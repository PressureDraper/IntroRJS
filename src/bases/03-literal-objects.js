const persona = {
    name: 'Test',
    age: 30,
    address: {
        city: 'MEX',
        zip: 91203
    }
};

// console.table(persona);

//Cloning object over differente memory space
const persona2 = { ...persona }

persona2.name = 'name'
persona2.address.city = 'ARG'

console.log(persona);

console.log(persona2);
