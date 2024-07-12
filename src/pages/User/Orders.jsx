import React, { useState } from "react"
import UserAdminContainer from "../../components/containers/UserAdminContainer"
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { useAuth } from "../../hooks/auth";
import moment from "moment";
import { useCart } from "../../hooks/cart";



const Orders = () => 
{
  const [orders, setOrders] = useState([]);
  const [auth, setaAuth] = useAuth();
  const [expandedRows, setExpandedRows] = useState({});

  // Function to get quantity for a specific product ID
const getQuantityForProduct = (quantities, productId) => 
  {
  // Check if quantities array exists and has items
  if (quantities && quantities.length > 0) {
    // Check if the quantities object exists for the given product ID
    const quantityObject = quantities[0][productId];
    // If the quantity object exists, return the quantity, otherwise return 0
    return quantityObject ? quantityObject : 0;
  } else {
    // If quantities array is empty or undefined, return 0
    return 0;
  }
};


  const handleRowClick = (id) => {
    setExpandedRows(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };
  

  const getOrders = async () =>
  {
    try
    {
      const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/auth/orders`);
      if(data?.success)
      {
        setOrders(data.orders);
      }
      else
      {
        toast.error(data?.message);
      }  
    }
    catch(error)
    {
      console.log("Error while getting orders!")
    }
  }

  useEffect(() =>
  {
    if(auth?.token)  getOrders();
  }, [auth?.token])

  return (
    <UserAdminContainer title="Profile || TIMEZEN">
      <div className="flex-1 flex justify-center items-center min-h-[85vh] text-center">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm">
                  <thead className="border-b-2 border-slate-400 font-medium text-slate-700">
                    <tr>
                      <th scope="col" className="px-6 py-4">#</th>
                      <th scope="col" className="px-6 py-4">Status</th>
                      <th scope="col" className="px-6 py-4">Client</th>
                      <th scope="col" className="px-6 py-4">Date</th>
                      <th scope="col" className="px-6 py-4">Quantity</th>
                      <th scope="col" className="px-6 py-4">Amount</th>
                      <th scope="col" className="px-6 py-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders?.map((item, index) => (
                      <React.Fragment key={item._id}>
                        <tr
                          className={`border-b border-slate-300 transition duration-300 ease-in-out ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} text-slate-700 font-semibold cursor-pointer`}
                        >
                          <td className="whitespace-nowrap px-6 py-4">{index + 1}</td>
                          <td className="whitespace-nowrap px-6 py-4">{item?.status}</td>
                          <td className="whitespace-nowrap px-6 py-4">{item?.client?.firstname}</td>
                          <td className="whitespace-nowrap px-6 py-4">{moment(item?.createdAt).fromNow()}</td>
                          <td className="whitespace-nowrap px-6 py-4">{item?.products?.length}</td>
                          <td className="whitespace-nowrap px-6 py-4">{item?.payment?.transaction?.amount}</td>
                          <td className="whitespace-nowrap px-6 py-4 flex justify-start items-center gap-4">
                            <button
                              onClick={() => handleRowClick(item._id)}
                              className="text-lg font-bold"
                            >
                              {expandedRows[item._id] ? '-' : '+'}
                            </button>
                          </td>
                        </tr>
                        {expandedRows[item._id] && (
                          <tr className="bg-amber-50">
                            <td colSpan="7">
                              <table className="min-w-full">
                                <thead>
                                  <tr className="border-b border-slate-300">
                                    <th className="px-6 py-4">Product Name</th>
                                    <th className="px-6 py-4">Unit Price</th>
                                    <th className="px-6 py-4">Quantity</th>
                                    <th className="px-6 py-4">Total Price</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {item?.products?.map((product, nestedIndex) => (
                                    <tr key={nestedIndex} className="border-b border-slate-300">
                                      <td className="whitespace-nowrap px-6 py-4">
                                      {product.name}</td>
                                      <td className="whitespace-nowrap px-6 py-4">{product.price}</td>
                                      <td className="whitespace-nowrap px-6 py-4"> {getQuantityForProduct(item?.quantities, product._id)}  </td>
                                      <td className="whitespace-nowrap px-6 py-4"> {getQuantityForProduct(item?.quantities, product._id)*product.price}  </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserAdminContainer>
  )
}

export default Orders