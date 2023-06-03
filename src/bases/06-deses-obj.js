//Destructuring IMPORTANT

const persona = {
    name: 'Tony',
    age: 25,
    uid: 12412123
}

const { age:newage, name, uid } = persona;

// console.log(newage);

// console.log(name);

// console.log(uid);

const returnPer = ({name, age, uid }) => {
    return {
        keyName: name,
        age: age,
        latlng: {
            lat: 124124,
            lng: -12.3541
        }
    }
}

const { keyName, age, latlng:{lat, lng} } = returnPer(persona);

console.log(keyName, age);
console.log(lat);
console.log(lng);