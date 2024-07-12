import watch from "../../assets/images/home-page/services-section/watch.png";
import guarantee from "../../assets/images/home-page/services-section/guarantee.png";
import delivery from "../../assets/images/home-page/services-section/delivery.gif";
import { FaShieldAlt } from "react-icons/fa"; 
import { RiShieldCheckFill } from "react-icons/ri"
import { GiCheckMark } from "react-icons/gi";  
import { FaTools } from "react-icons/fa";         
import { MdHighQuality } from "react-icons/md";  
import { GiClockwork } from "react-icons/gi"; 
import { FaShippingFast } from "react-icons/fa";   
import { RiAlarmFill } from "react-icons/ri";       
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaCreditCard } from "react-icons/fa";


import ContainerBox from "../../components/containers/ContainerBox";

const Services = () => 
{
    return (
        <ContainerBox title= "Services | TIMEZEN">
            <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0  overflow-hidden">
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                        {/* Image section */}
                        <div data-aos="zoom-in">
                            <img
                            src={guarantee}
                            alt="guarantee img"
                            className="max-w-[400px] w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)] spin"/>
                        </div>

                        {/* text content section */}
                        <div className="flex flex-col justify-center gap-6 sm:pt-0">
                            <h1
                            data-aos="fade-up"
                            className="text-3xl text-center font-bold text-slate-800">
                                Our Best Services
                            </h1>
                            <p
                            data-aos="fade-up"
                            className="text-sm text-slate-600 -mt-3 italic">
                                We offer a range of premium watch services, from maintenance and repair to ensuring your timepiece stays secure and precise.
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-5">
                                    <div 
                                    data-aos="fade-up" 
                                    className="flex items-center gap-3">
                                        <FaShieldAlt className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100 " />
                                        <span>Secure Services</span>
                                    </div>

                                    <div
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                    className="flex items-center gap-3">
                                        <RiShieldCheckFill className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100 " />
                                        <span>Comprehensive Warranty</span>
                                    </div>

                                    <div
                                    data-aos="fade-up"
                                    data-aos-delay="500"
                                    className="flex items-center gap-3">
                                        <GiCheckMark className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100" />
                                        <span>Replacement Guarantee</span>
                                    </div>
                                </div>

                                <div
                                data-aos="slide-left"
                                className="border-l-4 border-primary/50 pl-6 space-y-2">
                                    <h1 className="text-2xl font-semibold font-cursive ">
                                        Warranty and Guarantee
                                    </h1>
                                    <p className="text-sm text-gray-500">
                                        Our comprehensive warranty ensures your watch is protected against defects and malfunctions. We also offer guarantee services to ensure complete satisfaction with every aspect of our service.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 overflow-hidden">
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                        {/* text content section */}
                        <div className="flex flex-col justify-center gap-6 sm:pt-0 order-2 sm:order-1">
                                
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-5">
                                    <div 
                                    data-aos="fade-up" 
                                    className="flex items-center gap-3">
                                        <MdHighQuality className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100 " />
                                        <span>Quality Services</span>
                                    </div>

                                    <div
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                    className="flex items-center gap-3">
                                        <FaTools className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100 " />
                                        <span>Expert Repairs</span>
                                    </div>

                                    <div
                                    data-aos="fade-up"
                                    data-aos-delay="500"
                                    className="flex items-center gap-3">
                                        <GiClockwork className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100" />
                                        <span>Precision Maintenance</span>
                                    </div>
                                </div>

                                <div
                                data-aos="zoom-in"
                                className="border-l-4 border-primary/50 pl-6 space-y-2">
                                    <h1 className="text-2xl font-semibold font-cursive ">
                                        Quality Assurance
                                    </h1>
                                    <p className="text-sm text-gray-500">
                                        Just like crafting a fine timepiece, our services ensure precision, reliability, and longevity for your valued watches.
                                    </p>
                                </div>
                            </div>
                        </div>

                        
                        {/* Image section */}
                        <div 
                        data-aos="slide-left"
                        className="order-1 sm:order-2">
                            <img
                            src={watch}
                            alt="watch img"
                            className="max-w-[400px] w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)]"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 overflow-hidden">
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                        {/* Image section */}
                        <div data-aos="zoom-in">
                            <img
                                src={delivery}
                                alt="delivery img"
                                className="max-w-[400px] w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)] spin"
                            />
                        </div>

                        {/* text content section */}
                        <div className="flex flex-col justify-center gap-6 sm:pt-0">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-5">
                                    <div
                                        data-aos="fade-up"
                                        className="flex items-center gap-3"
                                    >
                                        <FaShippingFast className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100 " />
                                        <span>Express Delivery</span>
                                    </div>

                                    <div
                                        data-aos="fade-up"
                                        data-aos-delay="300"
                                        className="flex items-center gap-3"
                                    >
                                        <MdOutlineAccessTimeFilled className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100 " />
                                        <span>24/7 Customer Service</span>
                                    </div>

                                    <div
                                    data-aos="fade-up"
                                    data-aos-delay="500"
                                    className="flex items-center gap-3"
                                >
                                    <FaCreditCard className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100" />
                                    <span>Easy Payment</span>
                                    </div>
                                </div>

                                <div
                                    data-aos="slide-left"
                                    className="border-l-4 border-primary/50 pl-6 space-y-2"
                                >
                                    <h1 className="text-2xl font-semibold font-cursive ">
                                       Delivery and Payment
                                    </h1>
                                    <p className="text-sm text-gray-500">
                                        Enjoy our express delivery services to get your products on time. We also offer secure payment options to ensure a smooth and safe transaction.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ContainerBox>


        
  )
}

export default Services
