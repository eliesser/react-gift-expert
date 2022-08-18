export const getGift = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=SQYOTcaFPDCv61IaIrgqWtTr8LLQwMPY`;
    const resp = await fetch(url);
    const { data = [] } = await resp.json();
    const gifts = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gifts;
}