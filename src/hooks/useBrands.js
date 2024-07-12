import axios from "axios";
import { useEffect, useState } from "react"
import toast from "react-hot-toast";

const useBrands = () =>
{
    const [brands, setBrands] = useState([]);

    //get all brands
    const getBrands = async () =>
    {
        try
        {
            const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/brand/all-brands`);
            if(data?.success)
            {
                setBrands(data?.brands);
            }
        }
        catch(error)
        {
            console.log(error);
            toast.error("Something went wrong while getting Brand")
        }
    }

    useEffect(() =>
    {
        getBrands();
    }, [])
        
    return brands;
}

export default useBrands;