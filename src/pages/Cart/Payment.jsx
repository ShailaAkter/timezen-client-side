import axios from "axios";
import ContainerBox from "../../components/containers/ContainerBox";
import { useCart } from "../../hooks/cart";
import { useAuth } from "../../hooks/auth";
import { useState, useEffect } from "react";
import DropIn from "braintree-web-drop-in-react";
import { useNavigate } from "react-router-dom";
import YellowButton from "../../components/buttons/YellowButton";

const Payment = () => 
{
    const [cart, setCart, { quantities, removeFromCart, increaseQuantity, decreaseQuantity, totalPrice }] = useCart();
    const [auth, setAuth] = useAuth();
    const [clientToken, setClientToken] = useState();
    const [instance, setInstance] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    console.log(cart.length)
  
    // Get payment gateway token
    const getPaymentGatewayToken = async () => 
    {
        try 
        {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/product/braintree/token`);
            setClientToken(data?.clientToken);
        } 
        catch (error) 
        {
            console.log("Error while getting payment gateway token", error);
        }
    };
  
    // Handle payment
    const handlePayment = async () => 
    {
        try 
        {
            setLoading(true);
            const { nonce } = await instance.requestPaymentMethod();
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/product/braintree/payment`, {
            nonce,
            cart,
            quantities,
            total: totalPrice
            });
            setLoading(false);

            if (data.ok) 
            {
                localStorage.removeItem('cart');
                setCart([]);
                navigate('/userAdmin/orders');
                window.location.reload(); 
  
            } 
            else 
            {
                console.log("Payment not successful:", data);
            }
        } 
        catch (error) 
        {
            setLoading(false);
            console.error("Error while handling payment", error);
        }
    };
  
    useEffect(() => 
    {
        if (auth?.token) 
        {
            getPaymentGatewayToken();
        }
    }, [auth?.token]);
  
  return (
    <ContainerBox title="Payment | TIMEZEN">
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            {
                clientToken && cart.length > 0? 
                (
                    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                        <DropIn
                        options={{ authorization: clientToken }}
                        onInstance={(instance) => setInstance(instance)}/>

                        <button
                        onClick={handlePayment}
                        className="bg-red-600 text-white w-full py-3 mt-4 rounded-lg font-semibold text-lg hover:bg-red-700 disabled:bg-gray-400"
                        disabled={loading || !instance || !auth?.user?.address}>
                        {
                            loading ? "Processing ..." : "Make Payment"
                        }
                        </button>
                    </div>
                ) : 
                (
                    <div className="text-center">
                        <p className="text-sm text-slate-700 font-semibold">Add Product to Checkout!</p>
                        <YellowButton to={"/"}>Go Back to Home</YellowButton>
                    </div>   
                )}
        </div>
    </ContainerBox>
  )
}

export default Payment