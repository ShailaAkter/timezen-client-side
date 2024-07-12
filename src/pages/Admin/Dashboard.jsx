import AdminContainerBox from '../../components/containers/AdminContainerBox'
import { useAuth } from "../../hooks/auth";

const Dashboard = () => 
{
  const [auth, setAuth] = useAuth();
  const {firstname, lastname, email, phone, address} = auth?.user;

  return (
    <AdminContainerBox title="Dashboard || TIMEZEN">
        <main className="flex-1 flex justify-center items-center min-h-[85vh] text-center">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
            <h1 className="text-2xl font-semibold mb-4 mt-10">Hi <span className="text-blue-500">{firstname}</span></h1>
            <p className="text-lg text-gray-600 mb-6">Welcome to your dashboard</p>
            
            <h2 className="text-xl font-semibold mb-4">User Info</h2>
            <div className="space-y-2 mb-10">
              <p className="text-gray-700"><span className="font-medium">Firstname:</span> {firstname}</p>
              <p className="text-gray-700"><span className="font-medium">Lastname:</span> {lastname}</p>
              <p className="text-gray-700"><span className="font-medium">Email:</span> {email}</p>
              <p className="text-gray-700"><span className="font-medium">Phone:</span> {phone}</p>
              <p className="text-gray-700"><span className="font-medium">Address:</span> {address}</p>
            </div>
          </div>
        </main>
    </AdminContainerBox>
  )
}

export default Dashboard