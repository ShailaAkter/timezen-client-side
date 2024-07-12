import { useEffect, useState } from "react";
import { useCart } from "../../hooks/cart";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { BsFillCartCheckFill } from "react-icons/bs";
import LoadMoreButton from "../../components/buttons/LoadMoreButton";
import YellowButton from "../../components/buttons/YellowButton";


const LatestWatches = () => 
{
    const [products, setProducts] = useState([]);
    const [cart, setCart, { addToCart}] = useCart();
    const [loadMoreProducts, setLoadMoreProducts] = useState(4);

    const showMoreProducts = () =>
    {
        setLoadMoreProducts((prevProducts) => prevProducts + 4);
    }


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


  return (
    <div className="container mx-auto my-8 py-20">
        <div 
        data-aos = "fade-down"
        className="text-center mb-8 py-5">
            <h1 className="text-3xl font-bold text-slate-800">Our New Arrivals</h1>
            <p className="text-sm text-slate-600 -mt-3 italic">Browse our newest collection and find a watch that fits your style</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {
            products.slice(0, loadMoreProducts).map((product) => (
                <div 
                data-aos = "fade-up"
                key={product._id}
                className="shadow-lg overflow-hidden transform transition-all duration-300 rounded-lg hover:shadow-2xl hover:-translate-y-2 ">
                    <img
                    className="w-full h-60 object-contain"
                    src={`${import.meta.env.VITE_API_URL}/api/v1/product/product-photo/${product._id}`}
                    alt={product.name}
                    onContextMenu={"return false"}
                    />

                    <div className="p-4">
                        <p className="text-center text-sm font-semibold text-slate-600 truncate">{product.name} {product.brand.name}</p>
                        <p className="-mt-3 text-center text-sm text-slate-800 truncate">Model <span className="italic">{product.model}</span></p>
                        <p className="-mt-3 text-center text-sm text-slate-800 truncate">Color <span className="italic">{product.strapColor}</span></p>
                        
                    </div>

                    <div className="flex justify-between items-center px-6 pb-6">
                        <span className="font-semibold text-red-600">TK {product.price.toLocaleString()}</span>
                        <div className="flex space-x-2 items-center">
                            <Link to={`/product-details/${product.slug}`} className="text-slate-50 bg-slate-900 rounded opacity-85 hover:bg-yellow-700 transition duration-500 px-3 py-1">
                                <FaEye size={20} title="View Details" />
                            </Link>
                            <button
                            onClick={() => addToCart(product)}
                            className="text-slate-50 bg-slate-900 rounded hover:bg-yellow-700 opacity-85 transition duration-500 px-3 py-1">
                                <BsFillCartCheckFill size={20} title="Add to Cart"/>
                            </button>
                        </div>
                    </div>
                </div>   
            ))
        }
        </div>

        {
            loadMoreProducts < 8 && (
                <div 
                data-aos = "zoom-in"
                className="flex justify-center items-center pt-14 text-sm">
                    <LoadMoreButton 
                        onclick={showMoreProducts} 
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                        Show More...
                    </LoadMoreButton>
                </div>
            )
        }

        {
            loadMoreProducts > 7 && (
                <div 
                data-aos = "zoom-in"
                className="flex justify-center items-center pt-14">
                    <YellowButton
                        to="/shop" 
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                        View All Watches
                    </YellowButton>
                </div>
            )
        }
    </div>
  )
}

export default LatestWatches