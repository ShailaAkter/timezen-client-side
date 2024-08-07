import { useState } from "react"
import ContainerBox from "../../components/containers/ContainerBox"
import { FaEye } from "react-icons/fa";
import { TbFaceIdError} from "react-icons/tb";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useCart } from "../../hooks/cart";
import Loader from "../../components/ui/loader/Loader";
import { BsFillCartCheckFill } from "react-icons/bs";
import toast from "react-hot-toast";

const SingleBrand = () => 
{
    const [products, setProducts] = useState([]);
    const [brand, setBrand] = useState([]);
    const [cart, setCart, {addToCart}] = useCart();
    const [loading, setLoading] = useState(true);

    const params = useParams();

  // Get product by brand
  const getProductByBrand = async () => 
    {
        try 
        {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/product/product-brand/${params.slug}`);
            setProducts(data?.products);
            setBrand(data?.brand);
        } 
        catch (error) 
        {
            console.log(error);
            toast.error("Something went wrong while getting product");
        } 
        finally 
        {
            setLoading(false); 
        }
  };

    useEffect(() => 
    {
        if (params.slug) 
        {
            setLoading(true); 
            getProductByBrand();
        }
    }, [params.slug]);

  return (
    <ContainerBox title= "Brands | TIMEZEN - Shop Your Desired Watch">
        <div className="py-16">
        {
            loading ? 
            (
                <Loader />
            ) : 
            (
                <>
                {
                    products.length == 0 && 
                    (
                        <div className="text-2xl font-semibold text-slate-600 flex items-center justify-center">
                           <TbFaceIdError size={30}/> <span className="px-2 py-10">Sorry, No Matches Found!</span>
                        </div>
                    )
                }
                    
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {
                    products?.map((product) => (
                        <div
                        key={product._id}
                        className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                            <img
                                className="w-full h-60 object-contain"
                                src={`${import.meta.env.VITE_API_URL}/api/v1/product/product-photo/${product._id}`}
                                alt={product.name}
                                onContextMenu={"return false"}/>
                            <div className="p-4">
                                <p className="text-center text-sm font-semibold text-slate-600 truncate">{product.name}
                                <span className="px-1">
                                    {
                                        product.brand.name.toLowerCase() === "others" ? "" : product.brand.name
                                    } 
                                    </span>
                                </p>
                                <p className="-mt-3 text-center text-sm text-slate-800 truncate">Model <span className="italic">{product.model}</span></p>
                                <p className="-mt-3 text-center text-sm text-slate-800 truncate">Color <span className="italic">{product.strapColor}</span></p>
                            </div>
                            <div className="flex justify-between items-center px-6 pb-6">
                                <span className="font-semibold text-red-600">TK {product.price.toLocaleString()}</span>
                                <div className="flex space-x-2 items-center">
                                    <Link
                                        to={`/product-details/${product.slug}`}
                                        className="text-slate-50 bg-slate-900 rounded hover:bg-yellow-700 transition duration-500 px-3 py-1">
                                        <FaEye size={20} title="View Details" />
                                    </Link>
                                    <button
                                        onClick={() => addToCart(product)}
                                        className="text-slate-50 bg-slate-900 rounded hover:bg-yellow-700 transition duration-500 px-3 py-1">
                                        <BsFillCartCheckFill size={20} title="Add to Cart" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div></>
            )}
        </div>
    </ContainerBox>
  )
}

export default SingleBrand