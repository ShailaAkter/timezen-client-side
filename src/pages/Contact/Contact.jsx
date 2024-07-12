import ContainerBox from "../../components/containers/ContainerBox";
import { FaClock, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaMobile } from 'react-icons/fa';
import faq from "../../assets/images/contact-page/faq.gif";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Contact = () => {
  return (
    <ContainerBox title="Contact Us | TIMEZEN - Shop Your Desired Watch">
        <div className="min-h-screen flex flex-col items-center justify-center p-6">
            <div className=" p-8 w-full mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">

                <div>
                    <div className="pb-4">
                        <div className="flex items-center space-x-2">
                            <FaPhoneAlt className="h-4 w-4 text-slate-600" />
                            <div className="text-lg font-semibold text-slate-700">Phone</div>
                            </div>
                        <div className="text-sm text-slate-600 px-6">
                            <p>Customer Service: (+880) 456-7890</p>
                            <p className='-mt-3'>Office: (+880) 654-3210</p>
                        </div>
                    </div>

                    <div  className="pb-4">
                        <div className="flex items-center space-x-2">
                            <FaEnvelope className="h-4 w-4 text-slate-600" />
                            <div className="text-lg font-semibold text-gray-900">Email</div>
                        </div>
                        <div className="text-slate-600 text-sm px-6">
                            <p>General Inquiries: info@timezen.com</p>
                            <p className='-mt-3'>Customer Care: support@timezen.com</p>
                        </div>
                    </div>

                    <div className="pb-4">
                        <div className="flex items-center space-x-2">
                            <FaClock className="h-4 w-4 text-slate-700" />
                            <div className="text-lg font-semibold text-slate-700">Office Hours</div>
                            </div>
                        <div className=" text-slate-600 text-sm px-6">
                            <p>Open Everyday: 9:00 AM - 11:00 PM</p>
                            <p className='-mt-3'>Customer Service: 24/7 hour</p>
                        </div>
                    </div>

                    <div  className="pb-4">
                        <div className="flex items-center space-x-2">
                            <FaLocationDot className="h-4 w-4 text-slate-700" />
                            <div className="text-lg font-semibold text-slate-700">Address</div>
                            </div>
                        <div className=" text-slate-600 text-sm px-6">
                            <p>123, House 15, Main Road</p>
                            <p className='-mt-3'>Gulshan, Dhaka</p>
                        </div>
                    </div>
                    <div  className="pb-4">
                        <div className="flex items-center space-x-2">
                            <FaMobile className="h-4 w-4 text-slate-700" />
                            <div className="text-lg font-semibold text-slate-700 pb-2">Follow Us On</div>
                            </div>
                        <div className=" text-slate-600 text-sm px-6">
                            <div className="flex space-x-4">
                                <Link href="https://www.facebook.com" className="text-slate-700 hover:text-yellow-700 transition duration-300">
                                    <FaFacebook size={24} />
                                </Link>
                                <Link href="https://www.twitter.com" className="text-slate-700 hover:text-yellow-700 transition duration-300">
                                    <FaTwitter size={24} />
                                </Link>
                                <Link href="https://www.instagram.com" className="text-slate-700 hover:text-yellow-700 transition duration-300">
                                    <FaInstagram size={24} />
                                </Link>
                                <Link href="https://www.linkedin.com" className="text-slate-700 hover:text-yellow-700 transition duration-300">
                                    <FaLinkedin size={24} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className="text-2xl font-bold text-slate-900 mb-6 text-center md:text-left">Contact Us</h1>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-slate-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full mt-1 p-2 border border-slate-300 rounded-md focus:ring-yellow-700 focus:border-yellow-700"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-slate-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full mt-1 p-2 border border-slate-300 rounded-md focus:ring-yellow-700 focus:border-yellow-700"
                                placeholder="Your Email"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-slate-700">Message</label>
                            <textarea
                                id="message"
                                className="w-full mt-1 p-2 border border-slate-300 rounded-md focus:ring-yellow-700 focus:border-yellow-700"
                                placeholder="Your Message"
                                rows="4"
                            ></textarea>
                        </div>
                        <button
                        type="submit"
                        className="w-full bg-yellow-700 text-white py-2 rounded-md hover:bg-yellow-600 transition duration-300"
                        >
                        Send Message
                        </button>
                    </form>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 w-full mb-8">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Our Location</h2>
                <div className="w-full h-64 bg-slate-200 rounded-md">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509456!2d144.9537353153165!3d-37.81720997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577b1f9d8bcd92b!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1622896849246!5m2!1sen!2sau"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Map"
                ></iframe>
                </div>
            </div>

            <div className="p-8 w-full mb-8 grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center">
                <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-4">FAQ</h2>
                    <div className="space-y-4">
                        <details className="border border-slate-200 p-4 rounded-md">
                            <summary className="font-semibold text-slate-900 cursor-pointer faq-summary">What is your return policy?</summary>
                            <p className="text-slate-700 mt-2">Our return policy is 30 days with a full refund.</p>
                        </details>
                        <details className="border border-slate-200 p-4 rounded-md">
                            <summary className="font-semibold text-slate-900 cursor-pointer faq-summary">How can I track my order?</summary>
                            <p className="text-slate-700 mt-2">You can track your order using the tracking number provided in your order confirmation email.</p>
                        </details>
                        <details className="border border-slate-200 p-4 rounded-md">
                            <summary className="font-semibold text-slate-800 cursor-pointer faq-summary">Is there any close day?</summary>
                            <p className="text-slate-600 mt-2">We open everyday except Govt. Holiday like independence day or 16th Decemeber or Eid.</p>
                        </details>
                        <details className="border border-slate-200 p-4 rounded-md">
                            <summary className="font-semibold text-slate-800 cursor-pointer faq-summary">Do you available for 24/7 hour?</summary>
                            <p className="text-slate-600 mt-2">We are always at your service. Our hard working customer support team working for you 24/7 hours. Feel free to call anytime for any queries</p>
                        </details>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <img src={faq} alt="" width={450} />
                </div>
            </div>
        </div>
    </ContainerBox>
  );
};

export default Contact;
