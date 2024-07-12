import React from 'react';
import ContainerBox from '../../components/containers/ContainerBox';
import combobanner from "../../assets/images/home-page/combo-section/combo-banner.gif"; 
import { useEffect, useState } from "react";
import { useCart } from "../../hooks/cart";
import combo from "../../assets/images/home-page/combo-section/combo.png";
import combo2 from "../../assets/images/home-page/combo-section/combo2.png";
import { IoIosCheckmarkCircle } from "react-icons/io";
import toast from "react-hot-toast";
import axios from "axios";
import ComboCart from "../../components/buttons/ComboCart";
import YellowButton from "../../components/buttons/YellowButton";



const Offers = () => 
{
    const [products, setProducts] = useState([]);
    const [cart, setCart, { addToCart}] = useCart();
    const [comboProduct1, setComboProduct1] = useState(null);
    const [comboProduct2, setComboProduct2] = useState(null);


    //get all Products
    const getAllProducts = async () =>
    {
        try
        {
            const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/product/get-products`);
            setProducts(data.products);
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
        const product1 = products.find(p => p.name.toLowerCase() === 'family combo');
        const product2 = products.find(p => p.name.toLowerCase() === 'couple combo');
        setComboProduct1(product1);
        setComboProduct2(product2);
    }, [products]);
        
  return (
    <ContainerBox title="Home | TIMEZEN - A Reliable Watch Store">
        <div className='w-full py-16 bg-white'>
            <div>
                <img src={combobanner} alt="" />
            </div>

            <div className="md:min-h[100vh] flex flex-col-reverse md:flex-col lg:flex-row items-center gap-5 md:mx-32 mx-5 overflow-hidden p-5 -mt-5 lg:-mt-24">
                <div
                data-aos = "fade-right" 
                className="w-full flex justify-center items-center pb-20">
                    <img src={combo} alt="img" />
                </div>

                <div className="w-full flex justify-center items-center">
                    <div className="w-full text-center space-y-2 px-5">
                        <h1
                        data-aos = "fade-left"  
                        className="text-3xl font-bold text-slate-800">Family Package</h1>
                        <p 
                        data-aos = "fade-left" 
                        className="text-sm text-slate-600 -mt-3 italic">Explore our exclusive Combo Family Package, featuring three white color watches designed for men, women, and kid. Each timepiece embodies a unique style. This package offers a significant discount compared to purchasing each watch individually.</p>

                        {
                            comboProduct1 && (
                                <div 
                                data-aos = "zoom-out"
                                data-aos-duration = "2000"
                                className="text-center pt-8">
                                    <p className="text-xl text-slate-700 font-semibold">
                                        Grab the offer Only at 
                                        <span className="text-red-600 ml-2">{comboProduct1.price.toLocaleString()} TK</span>
                                    </p>
                                    <div className="flex space-x-2 justify-center">
                                        <ComboCart 
                                            onclick={() => addToCart(comboProduct1)}>
                                            Add to Cart
                                        </ComboCart>
                                        <YellowButton 
                                            to = {`/product-details/${comboProduct1.slug}`}>
                                            View Details
                                        </YellowButton>
                                    </div>

                            </div>
                        )}

                    </div>
                </div>
            </div>

            <div className="md:min-h[100vh] flex flex-col-reverse md:flex-col lg:flex-row items-center gap-5 md:mx-32 mx-5 mt-14 overflow-hidden bg-gray-100 p-5 rounded-xl shadow-xl py-16">
                <div
                data-aos = "fade-right" 
                className="w-full flex justify-center items-center ">
                    <img src={combo2} alt="img" />
                </div>

                <div className="w-full flex justify-center items-center">
                    <div className="w-full text-center space-y-2 px-5">
                        <h1
                        data-aos = "fade-left"  
                        className="text-3xl font-bold text-slate-800">Couple Package</h1>
                        <p 
                        data-aos = "fade-left" 
                        className="text-sm text-slate-600 -mt-3 italic">Explore our exclusive Combo Couple Package, featuring three white color watches designed for men and women. Each timepiece embodies a unique style. This package offers a significant discount compared to purchasing each watch individually.</p>

                        {
                            comboProduct2 && (
                                <div 
                                data-aos = "zoom-out"
                                data-aos-duration = "2000"
                                className="text-center pt-8">
                                    <p className="text-xl text-slate-700 font-semibold">
                                        Grab the offer Only at 
                                        <span className="text-red-600 ml-2">{comboProduct2.price.toLocaleString()} TK</span>
                                    </p>
                                    <div className="flex space-x-2 justify-center">
                                        <ComboCart 
                                            onclick={() => addToCart(comboProduct2)}>
                                            Add to Cart
                                        </ComboCart>
                                        <YellowButton 
                                            to = {`/product-details/${comboProduct2.slug}`}>
                                            View Details
                                        </YellowButton>
                                    </div>

                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    </ContainerBox>
  );
}

export default Offers;
