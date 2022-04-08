export const getGifs = async(category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(category)}&api_key=S4nQH92GDQ0EN0R6Heext5z4xLdqcT35`;
    const {data} = await fetch(url).then(res => res.json());

    const gifs = await data.map(img => {
        return {
            id:img.id,
            title: img.title,
            url:img.images.downsized_medium.url
        }
    })
    console.log(gifs);
    return gifs;
}