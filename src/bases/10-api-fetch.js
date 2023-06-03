const apiKey = 'dVXRQ3MOEh3kPA96UGNS2u8AbE0RjDDe';

const request = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

request
.then(resp => resp.json())
.then( ({data}) => data)
.then( ({images}) => images)
.then( ({original}) => original)
.then( ({url}) => {
    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
})
// .then( ({data}) => console.log(data.images))
.catch( console.warn);
