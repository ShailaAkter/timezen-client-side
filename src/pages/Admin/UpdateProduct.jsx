import { useEffect, useState } from "react"
import AdminContainerBox from "../../components/containers/AdminContainerBox"
import toast from "react-hot-toast";
import axios from "axios";
import { IoIosArrowDown } from "react-icons/io";
import AdminButton from "../../components/buttons/AdminButton";
import { useNavigate, useParams } from "react-router-dom";
import { Modal } from "antd";


const UpdateProduct = () => 
{
    const params = useParams();

    const [productId, setProductId] = useState([]);
    const [brands, setBrands] = useState([]);
    const [photo, setPhoto] = useState("");
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [model, setModel] = useState('');
    const [description, setDescription] = useState('');
    const [caseSize, setCaseSize] = useState('');
    const [dial, setDial] = useState('');
    const [dialColor, setDialColor] = useState('');
    const [glassMaterial, setGlassMaterial] = useState('');
    const [movement, setMovement] = useState('');
    const [strapColor, setStrapColor] = useState('');
    const [strapMaterial, setStrapMaterial] = useState('');
    const [waterResistance, setWaterResistance] = useState('');
    const [brand, setBrand] = useState('');
    const [brandName, setBrandName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [shippingAddress, setShippingAddress] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate();

    console.log(shippingAddress);

    //get single product
    const getProduct = async () =>
    {
        try
        {
            const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/product/get-product/${params.slug}`);

            console.log(data)
            setProductId(data.product._id);
            setName(data.product.name);
            setBrand(data.product.brand._id);
            setBrandName(data.product.brand.name);
            setPhoto(data.product.photo);
            setPrice(data.product.price);
            setModel(data.product.model);
            setDescription(data.product.description);
            setCaseSize(data.product.caseSize);
            setDial(data.product.dial);
            setDialColor(data.product.dialColor);
            setGlassMaterial(data.product.glassMaterial);
            setMovement(data.product.movement);
            setStrapColor(data.product.strapColor);
            setStrapMaterial(data.product.strapMaterial);
            setWaterResistance(data.product.waterResistance);
            setQuantity(data.product.quantity);
            setShippingAddress(data.product.shippingAddress);
        }
        catch(error)
        {
            console.log(error);
            toast.error("Something went wrong while getting product")
        }
    }

    //get all brands
    const getAllBrands = async () =>
    {
        try
        {
            const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/brand/all-brands`);
            if(data?.success)
            {
                setBrands(data.brands);
            }
        }
        catch(error)
        {
            console.log(error);
            toast.error("Something went wrong while getting Brand")
        }
    }


    //options toogle for brand names
    const toggleDropdown = () => 
    {
        setIsOpen(!isOpen);
    };
  
    //function for slected options
    const handleOptionClick = (id, name) => 
    {
        setBrand(id);
        setBrandName(name)
        setIsOpen(false);
    };

    const handleShippingOptionClick = (option) => 
    {
        setShippingAddress(option);
        setIsOpen(false);
    };

    //create watch function
    const handleUpdate = async (e) =>
    {
      e.preventDefault();
        try
        {
            const productData = new FormData();

            productData.append("brand", brand);
            productData.append("name", name);
            photo && productData.append("photo", photo);
            productData.append("price", price);
            productData.append("model", model);
            productData.append("description", description);
            productData.append("caseSize", caseSize);
            productData.append("dial", dial);
            productData.append("dialColor", dialColor);
            productData.append("glassMaterial", glassMaterial);
            productData.append("movement", movement);
            productData.append("strapColor", strapColor);
            productData.append("strapMaterial", strapMaterial);
            productData.append("waterResistance", waterResistance);
            productData.append("quantity", quantity);
            productData.append("shippingAddress", shippingAddress);

            const {data} = await axios.put(`${import.meta.env.VITE_API_URL}/api/v1/product/update-product/${productId}`, productData);

            console.log(data);

            if(data?.success)
            {
                toast.success("Updated Successfully!");
                navigate('/admin/manageProducts')
            }
            else
            {
                toast.error("error");
            }
        }
        catch(error)
        {
            console.log(error);
            toast.error("Something went wrong while updating watch model!");
        }
    }

    useEffect(()=>
    {
        getAllBrands();
        getProduct();
    },[])

  return (
    <AdminContainerBox title="Update Product || TIMEZEN">
        <div className="flex justify-center items-center min-h-[85vh] w-full">
            <div className="flex flex-col gap-6 w-full max-w-3xl">
                <h2 className="text-2xl font-bold text-slate-700 mb-10">Update Product</h2>

                {/* brand form  */}
                <span className="text-sm text-slate-600 font-semibold">Watch Brand:</span>
                <div className="relative inline-block -mt-4">
                    <div className="relative">

                        <button
                        onClick={toggleDropdown}
                        className="py-2 px-4 text-sm w-full bg-white border-2  border-slate-200 rounded focus:outline-none focus:border-slate-400 foucs:border-2 text-slate-600  flex justify-between font-semibold"
                        >
                        { brandName || 'Select Brand'}
                        <span><IoIosArrowDown /></span>
                        </button>

                        {isOpen && 
                        (
                            <div className="absolute top-full  w-full border border-slate-200 bg-white rounded mt-1 p-1 text-sm text-slate-700">
                            {brands.map((item) => 
                            (
                                <div
                                key={item._id}
                                onClick={() => handleOptionClick(item._id, item.name)}
                                className="px-4 py-2 cursor-pointer hover:bg-slate-200"
                                >
                                {item.name}
                                </div>
                            ))}

                            </div>
                        )
                        }
                    </div>
                </div>

                <span className="text-sm text-slate-600 font-semibold">Watch Photo:</span>
                {/* photo upload */}
                <div className="flex flex-col gap-1 -mt-4">
                    <label className="px-4 py-2 border-2 border-slate-200 rounded focus:outline-none focus:border-slate-400 foucs:border-2 text-slate-600 font-semibold text-sm">
                        {photo? photo.name : "Upload Photo"}
                        <input 
                        type="file" 
                        name="photo" 
                        accept="image/*" 
                        onChange={(e) =>{setPhoto(e.target.files[0])}} hidden/>
                    </label>

                {/* preview photo */}
                    <div>
                        {photo ? 
                        (
                            <div>
                            <img src={URL.createObjectURL(photo)} alt="watch photo" width={100} />
                            </div>
                        ) :
                        (
                            <div>
                            <img src={`${import.meta.env.VITE_API_URL}/api/v1/product/product-photo/${productId}`} alt="watch photo" width={100} />
                            </div>
                        )

                    }
                    </div>
                </div>

                <span className="text-sm text-slate-600 font-semibold">Watch Name:</span>
                <input 
                className="-mt-4 px-3 py-2 text-sm border-2 border-slate-200 rounded outline-slate-400 text-slate-700 font-semibold mr-4 w-full" 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter brand name"/>

                <span className="text-sm text-slate-600 font-semibold">Model:</span>
                <input 
                className="-mt-4 px-3 py-2 text-sm border-2 border-slate-200 rounded outline-slate-400 text-slate-700 font-semibold mr-4 w-full" 
                type="text" 
                value={model}
                onChange={(e) => setModel(e.target.value)}
                placeholder="Enter model"/>


                <span className="text-sm text-slate-600 font-semibold">Price:</span>
                <input 
                className="-mt-4 px-3 py-2 text-sm border-2 border-slate-200 rounded outline-slate-400 text-slate-700 font-semibold mr-4 w-full" 
                type="number" 
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter price"/>

                <span className="text-sm text-slate-600 font-semibold">Decription:</span>
                <textarea 
                rows={10}
                className="-mt-4 px-3 py-2 text-sm border-2 border-slate-200 rounded outline-slate-400 text-slate-700 font-semibold mr-4 w-full" 
                type="text" 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter description"/>

                <span className="text-sm text-slate-600 font-semibold">Case Size:</span>
                <input 
                className="-mt-4 px-3 py-2 text-sm border-2 border-slate-200 rounded outline-slate-400 text-slate-700 font-semibold mr-4 w-full" 
                type="text" 
                value={caseSize}
                onChange={(e) => setCaseSize(e.target.value)}
                placeholder="Enter case size"/>

                <span className="text-sm text-slate-600 font-semibold">Dial:</span>
                <input 
                className="-mt-4 px-3 py-2 text-sm border-2 border-slate-200 rounded outline-slate-400 text-slate-700 font-semibold mr-4 w-full" 
                type="text" 
                value={dial}
                onChange={(e) => setDial(e.target.value)}
                placeholder="Enter dial"/>

                <span className="text-sm text-slate-600 font-semibold">Dial Color:</span>
                <input 
                className="-mt-4 px-3 py-2 text-sm border-2 border-slate-200 rounded outline-slate-400 text-slate-700 font-semibold mr-4 w-full" 
                type="text" 
                value={dialColor}
                onChange={(e) => setDialColor(e.target.value)}
                placeholder="Enter dial color"/>

                <span className="text-sm text-slate-600 font-semibold">Glass Material:</span>
                <input 
                className="-mt-4 px-3 py-2 text-sm border-2 border-slate-200 rounded outline-slate-400 text-slate-700 font-semibold mr-4 w-full" 
                type="text" 
                value={glassMaterial}
                onChange={(e) => setGlassMaterial(e.target.value)}
                placeholder="Enter glass material"/>

                <span className="text-sm text-slate-600 font-semibold">Movement:</span>
                <input 
                className="-mt-4 px-3 py-2 text-sm border-2 border-slate-200 rounded outline-slate-400 text-slate-700 font-semibold mr-4 w-full" 
                type="text" 
                value={movement}
                onChange={(e) => setMovement(e.target.value)}
                placeholder="Enter movement"/>

                <span className="text-sm text-slate-600 font-semibold">Strap Color:</span>
                <input 
                className="-mt-4 px-3 py-2 text-sm border-2 border-slate-200 rounded outline-slate-400 text-slate-700 font-semibold mr-4 w-full" 
                type="text" 
                value={strapColor}
                onChange={(e) => setStrapColor(e.target.value)}
                placeholder="Enter strap color"/>

                <span className="text-sm text-slate-600 font-semibold">Strap Material:</span>
                <input 
                className="-mt-4 px-3 py-2 text-sm border-2 border-slate-200 rounded outline-slate-400 text-slate-700 font-semibold mr-4 w-full" 
                type="text" 
                value={strapMaterial}
                onChange={(e) => setStrapMaterial(e.target.value)}
                placeholder="Enter strap material"/>

                <span className="text-sm text-slate-600 font-semibold">Water Resistance:</span>
                <input 
                className="-mt-4 px-3 py-2 text-sm border-2 border-slate-200 rounded outline-slate-400 text-slate-700 font-semibold mr-4 w-full" 
                type="text" 
                value={waterResistance}
                onChange={(e) => setWaterResistance(e.target.value)}
                placeholder="Enter water resistance"/>

                <span className="text-sm text-slate-600 font-semibold">Quantity:</span>
                <input 
                className="-mt-4 px-3 py-2 text-sm border-2 border-slate-200 rounded outline-slate-400 text-slate-700 font-semibold mr-4 w-full" 
                type="number" 
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Enter quantity"/>

                <span className="text-sm text-slate-600 font-semibold">Shipping:</span>
                {/* shipping form  */}
                <div className="relative inline-block  -mt-4">
                    <div className="relative">

                        <button
                        onClick={toggleDropdown}
                        className="py-2 px-4 text-sm w-1/3 bg-white border-2  border-slate-200 rounded focus:outline-none focus:border-slate-400 foucs:border-2 text-slate-600  flex justify-between font-semibold"
                        >
                        {shippingAddress === null ? "Select Shipping" : shippingAddress === true ? "Yes" : "No"}
                        <span><IoIosArrowDown /></span>
                        </button>

                        {isOpen && 
                            (
                                <div className="absolute top-full border border-slate-200 bg-white rounded mt-1 text-sm text-slate-700 z-10">
                                    <div
                                        onClick={() => handleShippingOptionClick(true)}
                                        className="px-4 py-2 cursor-pointer hover:bg-slate-200">
                                        Yes
                                    </div>
                                    <div
                                        onClick={() => handleShippingOptionClick(false)}
                                        className="px-4 py-2 cursor-pointer hover:bg-slate-200">
                                        No
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>

                <button 
                onClick={handleUpdate}
                className="text-left mb-20">
                    <AdminButton>Update</AdminButton>
                </button>

            </div>
        </div>
    </AdminContainerBox>
  )
}

export default UpdateProduct