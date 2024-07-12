import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {motion} from "framer-motion"
import img1 from "../../assets/images/home-page/hero-section/apple.png"
import { slideInFromBottom, slideInFromTop, visiblity, visiblityRotate } from "../../utils/motion";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { HeroButton } from "../../components/buttons/HeroButton";

const Hero = () => 
{
    const [imageId, setImageId] = useState(img1);
    const [productSlug, setProductSlug] = useState("");
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [products, setProducts] = useState([]);
    const [firstSlideProducts, setFirstSlideProducts] = useState([]);

    const models = ["APPLE-SE-10", "CO-1285", "SMW-1005"];


    //get all products
  const getAllProducts = async() =>
    {
        try
        {
            const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/product/get-products`);
            setProducts(data.products);
            if (data.products.length > 0) 
            {
                setImageId(data.products[0]._id);
                setProductSlug(data.products[0].slug);
                setProductName(data.products[0].name);
                setProductPrice(data.products[0].price);
            }      
        }
        catch(error)
        {
            console.log(error);
            toast.error("Something went wrong while fetching all products!");
        }
    } 

    const getProductsByModel = async (models) => 
    {
        try 
        {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/product/get-products`);

            const filteredProducts = data.products.filter((product) => models.includes(product.model));

            setFirstSlideProducts(filteredProducts);
            if (filteredProducts.length > 0) 
            {
                setImageId(filteredProducts[0]._id);
                setProductSlug(filteredProducts[0].slug);
                setProductName(filteredProducts[0].name);
                setProductPrice(filteredProducts[0].price);
            }
        } 
        catch (error) 
        {
            console.log(error);
            toast.error("Something went wrong while fetching products by model!");
        }
    };


    const slideSettings = 
    {
        dots: true, 
        arrows: false,
        infinite: true, 
        speed: 1000,
        slidesToScroll: 1,
        autoplay: true, // Add this line
        autoplaySpeed: 5000,
        cssEase: 'ease-in-out',
        pauseOnHover: true, 
        pauseOnFocus: true
    };

    useEffect(() =>
    {
        getAllProducts();
        getProductsByModel(models)
    },[])


  return ( 
    <div className="py-10">
        <div className="w-full">
            <Slider {...slideSettings}>
                <div className="w-full h-full bg-cover bg-center bg-slide-1">
                    <div className="min-h-[600px] sm:min-h-[600px] flex justify-center items-center px-10">

                        <motion.div 
                        initial= "hidden"
                        animate = "visible"
                        className="w-full flex flex-col sm:flex-row  justify-between items-center sm:px-20">

                            <div className="order-2 sm:order-1 flex flex-col justify-center text-center sm:text-left">
                                <motion.span 
                                variants={slideInFromTop(1.2)}
                                className="text-xs text-slate-300 italic pt-5 sm:pt-0">Exclusive white edition Watch</motion.span>

                                <motion.span 
                                variants = {slideInFromTop(1.2)}
                                className="text-2xl sm:text-4xl text-slate-50 shadow-sm font-semibold pb-1">{productName}</motion.span>
                                
                                <motion.p 
                                variants={slideInFromTop(1.2)}
                                className="text-xl text-slate-50 font-bold"><span className="font-thin pr-3">ONLY</span>{productPrice.toLocaleString()} TK.</motion.p>
                                
                                <motion.div 
                                variants={slideInFromBottom(1.5)}
                                className="w-full max-w-3xl flex justify-center sm:justify-start items-center gap-4 text-center">

                                    <span className="flex flex-col border border-yellow-400 text-yellow-400 font-semibold rounded-md px-5 py-3">
                                        <span className="text-xs">This week Enjoy <br />
                                          <span className="text-2xl font-bold">30% OFF</span>
                                        </span>
                                        <Link className="border-b border-yellow-400 hover:border-slate-50 hover:text-slate-50 transla text-lg hover:scale-105 duration-100 transition-all" to={`product-details/${productSlug}`}>
                                            Shop Now
                                        </Link>
                                    </span>

                                </motion.div>
                            </div>

                            <div className="order-1 sm:order-2 flex flex-col sm:flex-row justify-center items-center">
                                <div className="text-cyan-200 flex justify-center items-center w-[200px] lg:w-[400px] md:w-[200px] sm:w-[400px] ">
                                    <motion.img 
                                    variants = {visiblityRotate(1.8)}
                                    src={`${import.meta.env.VITE_API_URL}/api/v1/product/product-photo/${imageId}`} 
                                    alt="" 
                                    onContextMenu={"return false"}/>
                                </div>
                                <div className="flex flex-row sm:flex-col gap-4">
                                    {
                                        firstSlideProducts.map((item =>
                                            <motion.div 
                                            variants={visiblity(2)}
                                            key={item.id}
                                            className="p-2 border-2 border-slate-500 hover:border-slate-100 hover:bg-slate-800 rounded-xl hover:scale-110 duration-200 transition-all">
                                                <img
                                                onClick={() => {
                                                    setImageId(item._id)
                                                    setProductSlug(item.slug)
                                                    setProductName(item.name)
                                                    setProductPrice(item.price)
                                                 }}
                                                src={`${import.meta.env.VITE_API_URL}/api/v1/product/product-photo/${item._id}`}
                                                className="max-w-[50px] h-[50px] md:w-[40px] md:h-[40px] object-contain inline-block "/>
                                            </motion.div>
                                        ))
                                    }
                                </div>
                            </div>

                        </motion.div>

                    </div>

                </div>

                <div className="w-full h-full bg-cover bg-center bg-slide-2">
                    <div className="min-h-[600px] sm:min-h-[600px] flex sm:justify-start justify-center sm:items-center items-start px-10">

                        <div className="flex flex-col text-center sm:text-left pt-20 sm:pt-0 px-10 sm:px-20">
                            <span className="text-2xl sm:text-4xl text-slate-50 shadow-sm font-semibold pb-1">Ultimate <br /> Water-Resistant Watch</span>

                            <span className="text-xs text-slate-300 italic ">Perfectly Designed for Your Active Lifestyle, with Advanced Waterproof Technology</span>

                            <div className="text-slate-50 font-bold pt-5">
                            {
                                products.slice(0, 1).map((item =>
                                    <HeroButton key={item._id} to={`product-details/${item.slug}`}>Shop Now</HeroButton>
                                    ))
                            }
                            </div>
                           
                        </div>

                    </div>

                </div>

                <div className="w-full h-full bg-cover bg-center bg-slide-3">
                    <div className="min-h-[600px] sm:min-h-[600px] flex sm:justify-start justify-center sm:items-center items-start px-10">

                        <div className="flex flex-col text-center sm:text-left pt-20 sm:pt-0 px-10 sm:px-20">
                            <span className="text-xs text-slate-300 italic pb-1">Offical Distributor of</span>

                            <span className="text-2xl sm:text-4xl text-slate-50 shadow-sm font-semibold">TISSOT, BALMAIN & <br />FOSSIL</span>

                            <div className="text-md text-slate-50 font-bold pt-5">
                                <HeroButton to="/brand/tissot">Shop Now</HeroButton>
                            </div>
                           
                        </div>

                    </div>

                </div>

                <div className="w-full h-full bg-cover bg-center bg-slide-4">
                    <div className="min-h-[600px] sm:min-h-[600px] flex sm:justify-start justify-center sm:items-center items-start px-10">

                        <div className="flex flex-col text-center sm:text-left pt-20 sm:pt-0 px-10 sm:px-20">
                            <span className="text-2xl sm:text-4xl text-slate-50 shadow-sm font-semibold pb-1">Premier Watch Emporium</span>

                            <span className="text-xs text-slate-300 italic ">Elevate Your Wristwear with Our Exclusive Collection</span>

                            <div className="text-md text-slate-50 font-bold pt-5">
                                <HeroButton to="/shop">Shop Now</HeroButton>
                            </div>
                           
                        </div>

                    </div>

                </div>

            </Slider>
        </div>
    </div>
  )
}

export default Hero