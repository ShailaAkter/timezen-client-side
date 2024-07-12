import { BiSolidDashboard } from "react-icons/bi";
import { IoIosCreate } from "react-icons/io";
import { BsCartCheckFill } from "react-icons/bs";
import UserNavlink from "./UserNavlink";

const UserMenu = ({handleSidebar}) => 
{
    const dashboardMenu = [
        { text: 'User Profile', to: '/userAdmin/dashboard', Icon: BiSolidDashboard },
        { text: 'Manage Profile', to: '/userAdmin/manage-profile', Icon: IoIosCreate },
        { text: 'Orders', to: '/userAdmin/orders', Icon: BsCartCheckFill},
      ];
  return (
    <ul className='py-5'>
    {
    dashboardMenu.map((item, index) => (
        <li 
        onClick={handleSidebar}
        key={index} 
        className='pt-2 flex items-center'>
            <UserNavlink 
            to={item.to}>
                <item.Icon size={22}/>
                {item.text}
            </UserNavlink>
        </li>
  ))}
    </ul>
  )
}

export default UserMenu