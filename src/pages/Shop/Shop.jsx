import { useState, useEffect } from "react";
import ContainerBox from "../../components/containers/ContainerBox";
import toast from "react-hot-toast";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaFilter, FaEye, FaCheckSquare, FaRegSquare, FaDotCircle, FaRegCircle, FaPlus, FaTimes } from "react-icons/fa";
import { BsFillCartCheckFill } from "react-icons/bs";
import { PiMinusThin } from "react-icons/pi";
import { TbFaceIdError, TbReload } from "react-icons/tb";
import Loader from "../../components/ui/loader/Loader";
import { Prices } from "../../components/filterData/Prices";
import { useCart } from "../../hooks/cart";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Shop = () => 
{
    const [products, setProducts] = useState([]);
    const [brands, setBrands] = useState([]);
    const [checkedBrands, setCheckedBrands] = useState([]);
    const [checkedPrices, setCheckedPrices] = useState([]);
    const [totalProducts, setTotalProducts] = useState(0);
    const [loading, setLoading] = useState(true);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [cart, setCart, { addToCart }] = useCart();


    //get all brands
    const getAllBrands = async () => 
    {
        try 
        {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/brand/all-brands`);
            if (data?.success) 
            {
                setBrands(data.brands);
            }
        } 
        catch (error) 
        {
            console.log(error);
            toast.error("Something went wrong while getting Brand");
        }
    };
    
    // Get all products
    const getAllProducts = async () => 
    {
        try 
        {
            setLoading(true);
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/product/get-products`);
            setProducts(data.products);
            setLoading(false);
        } 
        catch (error) 
        {
            console.log(error);
            toast.error("Something went wrong while fetching all products!");
            setLoading(false);
        }
    };
    
    // Filter by brands
    const handleFilter = (value, id) => 
    {
        let checkedProducts = [...checkedBrands];
        if (value) 
        {
            checkedProducts.push(id);
        } 
        else 
        {
            checkedProducts = checkedProducts.filter((item) => item !== id);
        }
        setCheckedBrands(checkedProducts);
    };
    
    // Get filtered product
    const getFilteredProducts = async () => 
    {
        try 
        {
            setLoading(true);
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/product/filter-products`, { checkedBrands, checkedPrices });
            setProducts(data?.products);
            setLoading(false);
        } 
        catch (error) 
        {
            console.log(error);
            toast.error("Something went wrong while fetching filtered products!");
            setLoading(true);
        }
      };
    
    // Get total products count
    const totalProductsCount = async () => 
    {
        try 
        {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/product/total-products`);
            setTotalProducts(data?.total);
        } 
        catch (error) 
        {
            console.log(error);
        }
    };
    
    useEffect(() => 
    {
        getAllBrands();
        totalProductsCount();
    }, []);
    
    useEffect(() => 
    {
        if (!checkedBrands.length && !checkedPrices.length) 
        {
            getAllProducts();
        }
    }, [checkedBrands.length, checkedPrices.length]);
    
    useEffect(() => 
    {
        if (checkedBrands.length || checkedPrices.length) 
        {
            getFilteredProducts();
        }
    }, [checkedBrands, checkedPrices]);


  return (
    <ContainerBox title="Shop | TIMEZEN - Shop Your Desired Watch">
        <div className="relative grid grid-cols-12 gap-8 mt-10 ">
            <div 
            data-aos="slide-right"
            data-aos-duration="1000"
            className="col-span-12 lg:col-span-3 lg:block">
                <div className="hidden sticky top-20 lg:block p-4 bg-white rounded-lg shadow-lg">
                    <h1 className="text-lg font-semibold text-slate-800 flex items-center">
                        <FaFilter className="mr-2" /> Filter
                    </h1>

                    <div className="mb-6 p-6 text-sm">
                        <h6 className="text-sm font-semibold text-slate-600 mb-2 border-b pb-2 border-slate-400 w-[150px]">Brand</h6>
                        <div className="flex flex-col space-y-2">
                            {
                                brands?.map((brand) => (
                                <div
                                key={brand._id}
                                className="flex items-center cursor-pointer"
                                onClick={() => handleFilter(!checkedBrands.includes(brand._id), brand._id)}>
                                {
                                    checkedBrands.includes(brand._id) ? 
                                    (
                                        <FaCheckSquare className="text-slate-600 mr-2" />
                                    ) : 
                                    (
                                        <FaRegSquare className="mr-2 text-slate-600"/>
                                    )}
                                    <span className="text-slate-700">{brand.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mb-6 p-6 text-sm">
                        <h1 className="text-sm font-semibold text-slate-600 mb-2 border-b pb-2 border-slate-400 w-[150px]">Price</h1>
                        <div className="flex flex-col space-y-2">
                            {
                                Prices?.map((item, index) => (
                                <div
                                key={index}
                                className="flex items-center cursor-pointer"
                                onClick={() => setCheckedPrices(item.array)}>
                                {
                                    JSON.stringify(checkedPrices) === JSON.stringify(item.array) ? 
                                    (
                                        <FaDotCircle className="text-slate-600 mr-2" />
                                    ) : 
                                    (
                                        <FaRegCircle className="mr-2 text-slate-600" />
                                    )}
                                    <div className="text-slate-600 flex items-center">
                                        <span>{item.starRange}</span>
                                        <span className="px-1"><PiMinusThin/></span> 
                                        <span>{item.endRange}</span>
                                    </div>
                            </div>
                            ))}
                        </div>
                    </div>

                    <div className="mb-6 p-6 text-sm">
                        <button 
                        onClick={() => window.location.reload()}
                        className="text-sm text-left font-semibold text-slate-600 mb-2 border-b pb-2 border-slate-400 w-[150px] flex items-center">
                            <TbReload 
                            size={20}
                            className="mr-2 text-slate-600" /> Reset Filters
                        </button>
                    </div>

                </div>
            </div>

            <div className="col-span-12 lg:col-span-9">
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
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {
                            products?.map((product) => (
                            <div
                            key={product._id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:shadow-2xl hover:-translate-y-2">

                                <img
                                    className="w-full h-60 object-contain pointer-events-none"
                                    src={`${import.meta.env.VITE_API_URL}/api/v1/product/product-photo/${product._id}`}
                                    onDragStart={(e) => e.preventDefault()}
                                    alt={product.name}
                                    onContextMenu={"return false"}/>

                                <div className="p-4">

                                    <p className="text-center text-sm font-semibold text-slate-600 truncate">{product.name}
                                        <span className="px-1">
                                        {
                                            product.brand?.name?.toLowerCase() === "others" ? "" : product.brand.name
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

            {/* Mobile filter button */}
            <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="fixed bottom-5 right-5 lg:hidden bg-yellow-700 text-white p-3 rounded-full shadow-lg transition-all">
                {
                    isFilterOpen ? 
                    <FaTimes title="Close Filter" size={24} /> : <FaPlus title="Open Filter" size={24} />
                }
            </button>

            {/* Mobile filter section */}
            {
            isFilterOpen && (
                <div 
                data-aos = "slide-right"
                data-aos-duration = "500"
                className="fixed inset-0 bg-slate-50 h-screen p-4 lg:hidden overflow-y-auto z-50 flex flex-col justify-around py-32 rounded-2xl w-1/2">
                    <h1 className="text-lg font-semibold text-slate-800 flex items-center">
                        <FaFilter className="mr-2" /> Filter
                    </h1>

                    <div className="mb-6 p-6 text-sm">
                        <h6 className="text-sm font-semibold text-slate-600 mb-2 border-b pb-2 border-slate-400 w-[150px]">Brand</h6>
                        <div className="flex flex-col space-y-2">
                            {
                                brands?.map((brand) => (
                                <div
                                key={brand._id}
                                className="flex items-center cursor-pointer"
                                onClick={() => handleFilter(!checkedBrands.includes(brand._id), brand._id)}>
                                {
                                    checkedBrands.includes(brand._id) ? 
                                    (
                                        <FaCheckSquare className="text-slate-600 mr-2" />
                                    ) : 
                                    (
                                        <FaRegSquare className="mr-2 text-slate-600"/>
                                    )}
                                    <span className="text-slate-700">{brand.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mb-6 p-6 text-sm">
                        <h1 className="text-sm font-semibold text-slate-600 mb-2 border-b pb-2 border-slate-400 w-[150px]">Price</h1>
                        <div className="flex flex-col space-y-2">
                            {
                                Prices?.map((item, index) => (
                                <div
                                key={index}
                                className="flex items-center cursor-pointer"
                                onClick={() => setCheckedPrices(item.array)}>
                                {
                                    JSON.stringify(checkedPrices) === JSON.stringify(item.array) ? 
                                    (
                                        <FaDotCircle className="text-slate-600 mr-2" />
                                    ) : 
                                    (
                                        <FaRegCircle className="mr-2 text-slate-600" />
                                    )}
                                    <div className="text-slate-600 flex items-center">
                                        <span>{item.starRange}</span>
                                        <span className="px-1"><PiMinusThin/></span> 
                                        <span>{item.endRange}</span>
                                    </div>
                            </div>
                            ))}
                        </div>
                    </div>

                    <div className="mb-6 p-6 text-sm">
                        <button 
                        onClick={() => window.location.reload()}
                        className="text-sm text-left font-semibold text-slate-600 mb-2 border-b pb-2 border-slate-400 w-[150px] flex items-center">
                            <TbReload 
                            size={20}
                            className="mr-2 text-slate-600" /> Reset Filters
                        </button>
                    </div>
                </div>
            )}
        </div>
    </ContainerBox>
  )
}

export default Shop