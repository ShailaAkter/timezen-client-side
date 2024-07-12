import { useEffect, useState } from "react"
import AdminContainerBox from "../../components/containers/AdminContainerBox"
import toast from "react-hot-toast";
import axios from "axios";
import { MdEdit, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import SlateButton from "../../components/buttons/SlateButton";
import { IoMdEye } from "react-icons/io";
import { Modal } from 'antd';



const ManageProducts = () => 
{
    const [products, setProducts] = useState([]);

    //get all products
    const getAllProducts = async () =>
    {
        try
        {
            const {data} =  await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/product/get-products`);
            setProducts(data.products);
        }
        catch(error)
        {
            console.log(error);
            toast.error("Something went wrong while fetching all products!");
        }
    }
  
    const handleDelete = async(id) =>
    {
        try
        {
            const {data} = await axios.delete(`${import.meta.env.VITE_API_URL}/api/v1/product/delete-product/${id}`);
            if(data?.success)
            {
                toast.success(data?.message);
                getAllProducts();
            }
    
        }
        catch(error)
        {
            console.log(error);
            toast.error("Something went wrong while deleting product!")
        }
    }
  
    const showDeleteConfirm = (productId) => 
    {
        Modal.confirm({
            title: 'Are you sure you want to delete this product?',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk: () => handleDelete(productId),
        });
    }
  
    useEffect(() =>
    {
      getAllProducts();
    }, [])
  
  return (
    <AdminContainerBox title="Manage Brands || TIMEZEN">
        <div className="flex justify-center items-center min-h-[85vh] w-full">
            <div className="w-full max-w-3xl">
                <h2 className="text-2xl font-bold text-slate-700 mb-5">Manage Products</h2>
                <div className="mb-5">
                    <SlateButton to="/admin/createProduct">Create Product</SlateButton>
                </div>

                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full text-left text-sm">
                                    <thead className="border-b-2 border-slate-400 font-medium text-slate-700">
                                        <tr>
                                            <th scope="col" className="px-6 py-4">#</th>
                                            <th scope="col" className="px-6 py-4">Image</th>
                                            <th scope="col" className="px-6 py-4">Name</th>
                                            <th scope="col" className="px-6 py-4">Model</th>
                                            <th scope="col" className="px-6 py-4">Brand</th>
                                            <th scope="col" className="px-6 py-4">Price</th>
                                            <th scope="col" className="px-6 py-4">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        products?.map((product, index) =>
                                        (
                                            <tr key={product._id} className="border-b border-slate-300 transition duration-300 ease-in-out hover:bg-slate-100 text-slate-700 font-semibold">
                                                <td className="whitespace-nowrap px-6 py-4">{index+1}</td>
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    <img
                                                    className="w-10 h-10 object-cover"
                                                    src={`${import.meta.env.VITE_API_URL}/api/v1/product/product-photo/${product._id}`}
                                                    alt="Card"/>
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4">{product.name}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{product.model}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{product.brand.name}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{product.price}</td>
                                                <td className="text-center">

                                                    <button 
                                                    title="Edit Product" 
                                                    className="text-slate-800 pr-3">                   <Link 
                                                        to={`/product-details/${product.slug}`}>
                                                            <IoMdEye size={20} />
                                                        </Link>
                                                    </button>
                                                    
                                                    <button 
                                                    title="Edit Product" 
                                                    className="text-slate-800 pr-3">                   
                                                        <Link 
                                                        to={`/admin/updateProduct/${product.slug}`}>
                                                            <MdEdit size={20}/>
                                                        </Link>
                                                    </button>

                                                    <button 
                                                    onClick={() => showDeleteConfirm(product._id)}
                                                    title="Delete Product"
                                                    className="text-red-600">
                                                        <MdDelete size={20}/>
                                                    </button>
                                                </td>
                                            </tr>
                                            ))
                                    }
                                    </tbody>
                                </table>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AdminContainerBox>
  )
}

export default ManageProducts