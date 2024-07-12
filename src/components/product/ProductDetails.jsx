import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import ContainerBox from "../containers/ContainerBox";
import { Loader } from "@react-three/drei";
import { useCart } from "../../hooks/cart";
import { FaEye} from "react-icons/fa";
import { BsFillCartCheckFill } from "react-icons/bs";
import ProductDetailButton from "../buttons/ProductDetailButton";


const ProductDetails = () => 
{
    const params = useParams();

    const [product, setProduct] = useState({});
    const [similarProducts, setSimilarProducts] = useState([])
    const [loading, setLoading] = useState(true);
    const [cart, setCart, { addToCart}] = useCart();

    //get similar product
    const getSimilarProduct = async (product_id, brand_id) => 
    {
        try 
        {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/product/similar-products/${product_id}/${brand_id}`);
            setSimilarProducts(data?.products);
        } 
        catch (error) 
        {
            console.log(error);
            toast.error("Something went wrong while getting product");
        }
    };


    // get single product
    const getProduct = async () => 
    {
        try 
        {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/product/get-product/${params.slug}`);
            setProduct(data?.product);
            getSimilarProduct(data?.product._id, data?.product.brand._id);
            setLoading(false);
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
        setLoading(true); 
        getProduct();
    }, [params.slug]);

    
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ContainerBox title= "Product Details | TIMEZEN - Shop Your Desired Watch">
        <div className="py-16">
        {
            loading ? 
            (
                <Loader />
            ) : 
            (
                <>
                    <div className='flex flex-col lg:flex-row justify-center items-center gap-10 p-6 lg:p-10 bg-white shadow-md rounded-lg'>
                    <div className='lg:w-1/2 flex justify-center'>
                        <img
                        className="w-full max-w-[450px] h-auto rounded-xl"
                        src={`${import.meta.env.VITE_API_URL}/api/v1/product/product-photo/${product._id}`}
                        alt="watch photo"
                        />
                    </div>

                    <div className='flex flex-col lg:w-1/2 space-y-4 mb-5'>
                        <h1 className='text-lg font-bold text-slate-800'>              
                        {product.brand.name.toLowerCase() === "others" ? null : (
                            <span className="pr-1">{product.brand.name}</span>
                        )} 
                        {product.model}
                        </h1>

                        <h1 className='text-2xl font-bold text-slate-800'>{product.name}</h1>

                        <p className='text-slate-600 text-sm'>{product.description}</p>

                        <p className="text-sm text-slate-600"><span className="font-semibold">Model: </span>{product.model}</p>
                        <p className="text-sm text-slate-600 -mt-2"><span className="font-semibold">Brand: </span>{product.brand.name}</p>
                        <p className="text-sm text-slate-600 -mt-2"><span className="font-semibold">Case Size: </span>{product.caseSize}</p>
                        <p className="text-sm text-slate-600 -mt-2"><span className="font-semibold">Dial: </span>{product.dial}</p>
                        <p className="text-sm text-slate-600 -mt-2"><span className="font-semibold">Dial Color: </span>{product.dialColor}</p>
                        <p className="text-sm text-slate-600 -mt-2"><span className="font-semibold">Glass Material: </span>{product.glassMaterial}</p>
                        <p className="text-sm text-slate-600 -mt-2"><span className="font-semibold">Movement: </span>{product.movement}</p>
                        <p className="text-sm text-slate-600 -mt-2"><span className="font-semibold">Strap Color: </span>{product.strapColor}</p>
                        <p className="text-sm text-slate-600 -mt-2"><span className="font-semibold">Strap Material: </span>{product.strapMaterial}</p>
                        <p className="text-sm text-slate-600 -mt-2"><span className="font-semibold">Water Resistance: </span>{product.waterResistance}</p>

                        <h6 className='text-2xl font-semibold text-red-700 pb-5 -mt-2'>TK. {product.price.toLocaleString()}</h6>

                        <div className='flex items-center'>
                            <ProductDetailButton onclick={() => addToCart(product)}>
                                Add To Cart
                            </ProductDetailButton>
                        </div>
                    </div>
                    </div>
                </>
            )}
        </div>

        <div className="container mx-auto my-5">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-slate-800 pb-5">Similar Products</h1>
            </div>

            {
                similarProducts.length < 1 ? 
                (
                    <p className="text-sm text-slate-600 text-center">Sorry, No Matches Found!</p>
                ) : 
                (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {
                            similarProducts?.map((product) => (
                            <div
                            key={product._id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:shadow-2xl hover:-translate-y-2">

                                <img
                                    className="w-full h-60 object-contain"
                                    src={`${import.meta.env.VITE_API_URL}/api/v1/product/product-photo/${product._id}`}
                                    alt={product.name}/>

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
                    </div>
            )}
        </div>

    </ContainerBox>
  )
}

export default ProductDetails