import { FaPhoneAlt , FaEnvelope, FaClock } from 'react-icons/fa';
import faq from "../../assets/images/contact-page/faq.gif";


const Contact = () => 
{
  return (
    <div className="py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 
            data-aos= "fade-down"
            data-aos-duration="200"
            className="text-3xl font-bold text-slate-800 text-center">Contact Us</h1>
            <p 
            data-aos= "fade-down"
            data-aos-duration="200"
            className="text-sm text-slate-600 -mt-3 italic lg:mx-auto text-center">
                We'd love to hear from you! Reach out to us through any of the following methods.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div 
                data-aos="fade-up-left"
                data-aos-duration="500"
                className="bg-gray-100 hover:bg-white border border-gray-200 hover:-translate-y-2 transition-all duration-300 shadow-lg rounded-lg p-6 hover:border-gray-200">
                    <div className="flex items-center space-x-4">
                        <FaPhoneAlt className="h-6 w-6 text-slate-700" />
                        <div className="text-lg font-semibold text-slate-700">Phone</div>
                        </div>
                    <div className="mt-4 text-sm text-slate-600 px-10">
                        <p>Customer Service: (+880) 456-7890</p>
                        <p className='-mt-2'>Office: (+880) 654-3210</p>
                    </div>
                </div>

                <div 
                data-aos="zoom-in-up"
                data-aos-duration="500"
                className="bg-gray-100 hover:bg-white border border-gray-200 hover:-translate-y-2 transition-all duration-300 shadow-lg rounded-lg p-6 hover:border-gray-200">
                    <div className="flex items-center space-x-4">
                        <FaEnvelope className="h-6 w-6 text-slate-700" />
                        <div className="text-lg font-semibold text-gray-900">Email</div>
                    </div>
                    <div className="mt-4 text-slate-600 text-sm px-10">
                        <p>General Inquiries: info@timezen.com</p>
                        <p className='-mt-2'>Customer Care: support@timezen.com</p>
                    </div>
                </div>

                <div 
                data-aos="fade-up-right"
                data-aos-duration="500"
                className="bg-gray-100 hover:bg-white border border-gray-200 hover:-translate-y-2 transition-all duration-300 shadow-lg rounded-lg p-6 hover:border-gray-200">
                    <div className="flex items-center space-x-4">
                    <FaClock className="h-6 w-6 text-slate-700" />
                    <div className="text-lg font-semibold text-slate-700">Office Hours</div>
                    </div>
                    <div className="mt-4 text-slate-600 text-sm px-10">
                    <p>Open Everyday: 9:00 AM - 11:00 PM</p>
                    <p className='-mt-2'>Customer Service: 24/7 hour</p>
                    </div>
                </div>
            </div>
      </div>

      <div className="p-8 w-full mb-8 grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center">
                <div className='lg:ps-10'>
                    <h2 
                    data-aos="fade-down"
                    data-aos-duration="200"
                    className="text-xl font-bold text-slate-900 mb-4">FAQ</h2>
                    <div className="space-y-4">
                        <details
                        data-aos="fade-up"
                        data-aos-duration="500"
                        className="border border-slate-200 p-4 rounded-md">
                            <summary className="font-semibold text-slate-900 cursor-pointer faq-summary">What is your return policy?</summary>
                            <p className="text-slate-700 mt-2 ps-4">Our return policy is 30 days with a full refund.</p>
                        </details>
                        <details
                        data-aos="fade-up"
                        data-aos-duration="1000" 
                        className="border border-slate-200 p-4 rounded-md">
                            <summary className="font-semibold text-slate-900 cursor-pointer faq-summary">How can I track my order?</summary>
                            <p className="text-slate-700 mt-2 ps-4">You can track your order using the tracking number provided in your order confirmation email.</p>
                        </details>
                        <details
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        className="border border-slate-200 p-4 rounded-md">
                            <summary className="font-semibold text-slate-800 cursor-pointer faq-summary">Is there any close day?</summary>
                            <p className="text-slate-600 mt-2 ps-4">We open everyday except Govt. Holiday like independence day or 16th Decemeber or Eid.</p>
                        </details>
                        <details
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        className="border border-slate-200 p-4 rounded-md">
                            <summary className="font-semibold text-slate-800 cursor-pointer faq-summary">Do you available for 24/7 hour?</summary>
                            <p className="text-slate-600 mt-2 ps-4">We are always at your service. Our hard working customer support team working for you 24/7 hours. Feel free to call anytime for any queries</p>
                        </details>
                    </div>
                </div>
                <div 
                data-aos="zoom-in"
                data-aos-duration="1000"
                className="flex justify-center items-center">
                    <img src={faq} alt="" width={450} />
                </div>
            </div>
    </div>
  )
}

export default Contact