import { useEffect, useState } from "react";
import { getGift } from "../helpers/getGift";

export const useFetchGifts = (category) => {
    const [images, setImages] = useState([]);
    const [isLoaging, setisLoaging] = useState(true);

    const getImages = async () => {
        const newImages = await getGift(category);
        setImages(newImages);
        setisLoaging(false);
    }

    useEffect(() => { getImages(); }, [])

    return { images, isLoaging }
}
