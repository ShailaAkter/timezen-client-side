import { useNavigate } from "react-router-dom"
import RegularButton from "../../components/buttons/RegularButton"
import YellowButton from "../../components/buttons/YellowButton"
import registerCard from "../../assets/images/user-auth/register-card.jpg"
import { FaEye, FaEyeSlash } from "react-icons/fa6"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import axios from "axios"
import { useAuth } from "../../hooks/auth"
import UserAdminContainer from "../../components/containers/UserAdminContainer"

const ManageProfile = () => 
{
    const [auth, setAuth] = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    console.log(auth.user);

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
  
    const navigate = useNavigate();
  
    const checkPasswordVisiblity = () =>
    {
      setShowPassword(!showPassword);
    }

   
    //get user data
    useEffect(() => {
      if (auth?.user) {
        setFirstname(auth.user.firstname || '');
        setLastname(auth.user.lastname || '');
        setEmail(auth.user.email || '');
        setPhone(auth.user.phone || '');
        setAddress(auth.user.address || '');
      }
    }, [auth?.user]);
    //register form handling function
    const handleUpdate = async (e) =>
    {
      e.preventDefault();
  
      try
      {
        const {data} = await axios.put(`${import.meta.env.VITE_API_URL}/api/v1/auth/update-profile`,
        {
          firstname, 
          lastname, 
          email, 
          password, 
          phone, 
          address
        });

        console.log(data);
  
        if (data && data?.success) 
        {
          setAuth({ ...auth, user: data?.updatedUser });
          let ls = localStorage.getItem("auth");
          ls = JSON.parse(ls);
          ls.user = data.updatedUser;
          localStorage.setItem('auth', JSON.stringify(ls));
          toast.success(data?.message);
          navigate('/userAdmin/manage-profile');
        } 
        else 
        {
          toast.error(data?.message);
        }
      }
      catch(error)
      {
        console.log(`Error in Register handleSubmit = ${error}`);
        toast.error("Something went wrong while submit register");
      }
  
    }
  
  return (
    <UserAdminContainer title="Register | TIMEZEN">
        <div className="flex-1 flex justify-center items-center min-h-[85vh] text-center">
            <div>
                <form className="space-y-4" onSubmit={handleUpdate}>
                    <input 
                        className="w-full bg-gray-200 rounded px-3 py-2 text-sm font-semibold text-gray-700" 
                        type="text" 
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        placeholder="First Name"
                    />

                    <input 
                        className="w-full bg-gray-200 rounded px-3 py-2 text-sm font-semibold text-gray-700" 
                        type="text" 
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        placeholder="Last Name" 
                    />

                    <input 
                        className="w-full bg-gray-200 rounded px-3 py-2 text-sm font-semibold text-gray-700" 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        disabled
                    />

                    <div className="relative">
                        <input 
                            className="w-full bg-gray-200 rounded px-3 py-2 text-sm font-semibold text-gray-700" 
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password" 
                        />
                        <span onClick={checkPasswordVisiblity} className="absolute text-slate-500 top-3 right-3 cursor-pointer"> 
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </span>
                    </div>

                    <input 
                        className="w-full bg-gray-200 rounded px-3 py-2 text-sm font-semibold text-gray-700" 
                        type="text" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone"
                    />

                    <input 
                        className="w-full bg-gray-200 rounded px-3 py-2 text-sm font-semibold text-gray-700" 
                        type="text" 
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Address"
                    />
                    <div className="flex justify-start">
                        <button type="submit"><RegularButton>Update</RegularButton></button>
                    </div>

                </form>
            </div>
        </div>
    </UserAdminContainer>
  )
}

export default ManageProfile