import { useEffect, useState } from "react";
import { useCart } from "../../hooks/cart";
import combo from "../../assets/images/home-page/combo-section/combo.png";
import { IoIosCheckmarkCircle } from "react-icons/io";
import toast from "react-hot-toast";
import axios from "axios";
import ComboCart from "../../components/buttons/ComboCart";
import YellowButton from "../../components/buttons/YellowButton";


const ComboDeal = () => 
{
    const [products, setProducts] = useState([]);
    const [cart, setCart, { addToCart}] = useCart();
    const [comboProduct, setComboProduct] = useState(null);


    //get all Products
    const getAllProducts = async () =>
    {
        try
        {
            const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/product/get-products`);
            setProducts(data.products);
            console.log(comboProduct);

        }
        catch(error)
        {
            console.log(error);
            toast.error("Something went wrong while fetching all products!");
        }
    }
     
    useEffect(() =>
    {
        getAllProducts();
    }, []);

    useEffect(() => 
    {
        // Find the specific combo product
        if (products.length > 0) 
        {
            const product = products.find(p => p.name.toLowerCase() === 'family combo');
            setComboProduct(product);
        }
    }, [products]);
        

  return (
    <div className="container mx-auto px-4 py-8">
        <div className="md:min-h[100vh] flex flex-col-reverse md:flex-col lg:flex-row items-center gap-5 md:mx-32 mx-5 mt-14 overflow-hidden">
            <div
            data-aos = "fade-right" 
            className="w-full flex justify-center items-center pb-20">
                <img src={combo} alt="img" />
            </div>

            <div className="w-full flex justify-center items-center">
                <div className="w-full text-center space-y-2 px-5">
                    <h1
                    data-aos = "fade-left"  
                    className="text-3xl font-bold text-slate-800">Why Choose Combo Family Package?</h1>
                    <p 
                    data-aos = "fade-left" 
                    className="text-sm text-slate-600 -mt-3 italic">Explore our exclusive Combo Family Package, featuring three white color watches designed for men, women, and kid. Each timepiece embodies a unique style. This package offers a significant discount compared to purchasing each watch individually.</p>
                    <div className="text-left text-sm">
                        <ul className=" text-slate-700 py-2 flex justify-center items-center space-x-3">
                            <li 
                            data-aos = "zoom-in"
                            data-aos-duration = "2000" 
                            className="flex items-center">
                                <IoIosCheckmarkCircle 
                                size={15} 
                                className="text-slate-600 mr-1" />
                                <span className="font-light text-xs text-slate-700">Unbeatable Price</span>
                            </li>
                            <li 
                            data-aos = "zoom-in"
                            data-aos-duration = "2000"
                            className="flex items-center">
                                <IoIosCheckmarkCircle
                                size={15}
                                className="text-slate-600 mr-1" />
                                <span className="font-light text-xs text-slate-700">Unique Style</span>
                            </li>
                            <li 
                            data-aos = "zoom-in"
                            data-aos-duration = "2000"
                            className="flex items-center">
                                <IoIosCheckmarkCircle
                                size={15}  
                                className="text-slate-600 mr-1" />
                                <span className="font-light text-xs text-slate-700">Perfect Gift</span>
                            </li>
                        </ul>
                    </div>

                    {
                        comboProduct && (
                            <div 
                            data-aos = "zoom-out"
                            data-aos-duration = "2000"
                            className="text-center pt-8">
                                <p className="text-xl text-slate-700 font-semibold">
                                    Grab the offer Only at 
                                    <span className="text-red-600 ml-2">{comboProduct.price.toLocaleString()} TK</span>
                                </p>
                                <div className="flex space-x-2 justify-center">
                                    <ComboCart 
                                    onclick={() => addToCart(comboProduct)}>
                                        Add to Cart
                                    </ComboCart>
                                    <YellowButton 
                                    to = {`/product-details/${comboProduct.slug}`}>
                                        View Details
                                    </YellowButton>
                                </div>

                            </div>
                        )}

                    </div>
            </div>
        </div>
    </div>
  )
}

export default ComboDeal