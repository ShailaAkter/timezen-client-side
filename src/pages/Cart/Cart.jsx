import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useCart } from "../../hooks/cart"
import { useEffect, useState } from "react";
import { FaMinus, FaOpencart, FaPlus, FaTrash } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";


const Cart = () => 
{
    const [cart, setCart, { quantities,  removeFromCart, increaseQuantity, decreaseQuantity, totalPrice }] = useCart();
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();
  
  return (
    <div>
        {
            cart.length < 1 ?
            (
                <div className="h-screen flex flex-col justify-start py-24 items-center text-slate-800 opacity-85">
                    <TiShoppingCart size={200}/>
                    <h1 className="text-2xl font-bold">Your Cart is Empty</h1>
                </div>
            ):
            (
                <div className="flex flex-col items-center overflow-hidden">
                    <div className="flex justify-center items-center font-semibold text-slate-600 py-3">
                        <FaOpencart size={25}/> <span className="px-3">Total Item ({cart.length})</span>
                    </div>

                    <div className="flex flex-col border-t border-t-slate-300 pt-2">
                        <div className="flex-grow overflow-y-auto max-h-[500px]">
                        {
                            cart?.map(item => (
                            <div key={item._id} className="flex justify-between items-center my-2 bg-white rounded-lg border border-slate-200 shadow-md px-2 text-sm overflow-hidden">
                                <div className="flex justify-start items-center truncate py-5 px-2">
                                    <img
                                    className="w-20 h-20"
                                    src={`${import.meta.env.VITE_API_URL}/api/v1/product/product-photo/${item._id}`}
                                    alt="Card"
                                    />
                                    <div className="flex flex-col px-3">
                                        <span className="text-slate-800 text-sm">{item.name}</span>
                                        <span className="">{item.model}</span>
                                        <div className="pt-1">     
                                            <button 
                                            className="bg-slate-200 hover:bg-slate-700 hover:text-white p-2 my-1 rounded"
                                            onClick={() => decreaseQuantity(item._id)}>
                                                <FaMinus size={10}/>
                                            </button>
                                            
                                            <span 
                                            className="text-slate-800 text-base font-semibold p-3">{quantities[item._id]}</span>

                                            <button 
                                            className="bg-slate-200 hover:bg-slate-700 hover:text-white p-2 my-1 rounded"
                                            onClick={() => increaseQuantity(item._id)}> 
                                                <FaPlus size={12}/>
                                            </button>
            

                                        </div>
                                    </div>
                                </div>
            
                                <div className="flex flex-col items-end px-5">
                                    <button 
                                    className="py-2 text-slate-600 hover:text-red-600"
                                    onClick={() => removeFromCart(item._id)}>
                                        <FaTrash size={14}/>
                                    </button>
                                    <span className="text-base font-semibold text-red-600">{quantities[item._id]*item.price}</span>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>

                    
                    
                    
                    <div className="bottom-0 fixed border-t-2 border-t-slate-300 py-5 text-center my-10">
                    {
                        auth?.token && auth?.user?.firstname?
                        (
                            <Link 
                            className="bg-red-600 text-white text-center py-3 text-sm font-semibold hover:bg-red-700 rounded-md px-5"
                            to={'/payment'}>
                                    Proceed to Checkout <span className="px-2 text-2xl font-extralight">|</span> TK. {totalPrice.toLocaleString()}
                            </Link>
                        ):
                        (
                            <Link
                            className="bg-red-600 text-white text-center pt-2 pb-3 text-sm font-semibold rounded-md px-5"
                            to={'/login'}
                            >
                                Login to Checkout <span className="px-2 text-2xl font-extralight">|</span> TK. {totalPrice.toLocaleString()}
                            </Link>
                        )
                    }
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default Cart