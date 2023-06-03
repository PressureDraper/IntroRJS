//async - await


const getImage = async() => {
    const apiKey = 'dVXRQ3MOEh3kPA96UGNS2u8AbE0RjDDe';

    const request = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

    return await request.json();

};

getImage()
.then( ({data}) => data)
.then(data => {
    const { url } = data.images.original;
    console.log(url);
})
.catch(console.warn);