//Destructuring arrays

const arr = [1,2,3];

const [, , n1] = arr;

console.log(n1);

const retArr = () => {
    return ['ab', 12];
}

const [words, num] = retArr();

console.log(words);
console.log(num);

const useState = ( value ) => {
    return [value, () => {
        console.log('Hello World');
    }];
}

const [name, setName] = useState('val');

console.log(name);
setName();
