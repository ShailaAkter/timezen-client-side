import React from 'react';
import { FaShippingFast } from 'react-icons/fa';
import customerservice from "../../assets/images/home-page/fastdelivery-section/customer-service.gif";
import deliveryman from "../../assets/images/home-page/fastdelivery-section/delivery-man.gif";
import YellowButton from '../../components/buttons/YellowButton';


const FastestDelivery = () => 
{
    return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 overflow-hidden">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-7">
            <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
                <div 
                data-aos= "fade-down"
                data-aos-duration = "1000"
                className="flex items-center justify-center w-16 h-16 mb-8 lg:w-28 lg:h-28">
                    <img src={customerservice} alt="customer service" />
                </div>
                <h2
                data-aos= "fade-down" 
                data-aos-duration = "500"
                className="mb-5 text-3xl font-bold  text-slate-800 sm:text-4xl sm:leading-none">
                    Experience the <span className='text-yellow-800'>Fastest <br /> Delivery</span> with <span className='text-yellow-800'>24/7</span> 
                    <br /> Customer Service
                </h2>
                <p 
                data-aos= "fade-up" 
                data-aos-duration = "500"
                className="text-sm text-slate-600 italic mb-8">
                    At TIMEZEN, we pride ourselves on offering the fastest delivery with 24/7 hours customer care service. Enjoy swift and reliable shipping, easy smooth transaction or cash on delivery ensuring your chosen timepiece reaches you in perfect condition and in the shortest time possible. Experience seamless shopping and timely delivery with TIMEZEN.
                </p>
                <div
                data-aos= "fade-up" 
                data-aos-duration = "1000">
                    <YellowButton to="/shop">
                        Shop Now
                    </YellowButton>
                </div>
            </div>
            <div className="lg:w-1/2">
                <div 
                data-aos= "zoom-out" 
                data-aos-duration = "1000"
                className='max-w-[450px] w-full mx-auto'>
                    <img src={deliveryman} alt="" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default FastestDelivery;
