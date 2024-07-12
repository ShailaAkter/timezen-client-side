import ladiesWatch from "../../assets/images/home-page/about-section/ladies-watch.png";
import titan from "../../assets/images/home-page/about-section/titan.png";
import combo from "../../assets/images/home-page/about-section/combo.png";
import services from "../../assets/images/home-page/about-section/services.png";
import { Link } from "react-router-dom";

const About = () => 
{
    return (
        <div className="container mx-auto py-10 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                <span 
                data-aos = "flip-down"
                data-aos-duration = "1000"
                className="relative group rounded-2xl overflow-hidden shadow-lg transition-all transform hover:scale-105 bg-card-1">
                    <Link to="/brand/others">
                        <div className="relative p-6">
                            <h1 className="text-xl sm:text-2xl font-bold text-slate-700 mb-2">Ladies Collection</h1>
                            <p className="text-xs text-slate-600 mb-4 font-semibold">Find Your Perfect Balance of Unique Style And Affordability in Our Ladies Watch Collection</p>
                            <button className="border-2 font-semibold border-slate-700 p-2 rounded group-hover:border-slate-50 group-hover:bg-rose-700 text-sm text-slate-700 group-hover:text-slate-50 transition-all transform hover:scale-105">Explore Now</button>
                        </div>
                        <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform z-10">
                            <img src={ladiesWatch} alt="Ladies Collection" className="max-w-[200px] mx-auto block transform -translate-y-16 group-hover:scale-125 group-hover:rotate-45 duration-300" />
                        </div>
                    </Link>
                </span>

                <span
                data-aos = "flip-down"
                data-aos-duration = "1000"
                className="relative group rounded-2xl overflow-hidden shadow-lg transition-all transform hover:scale-105 bg-card-2">
                    <Link to="/brand/titan">
                        <div className="relative p-6">
                            <h1 className="text-xl sm:text-2xl font-bold text-slate-700 mb-2">Classic Titan</h1>
                            <p className="text-xs text-slate-600 mb-4 font-semibold">Experience Timeless Elegance
                            Find Your Perfect Titan at TIMEZEN Today and Embrace Luxury</p>
                            <button className="border-2 font-semibold border-slate-700 p-2 rounded group-hover:border-slate-50 group-hover:bg-yellow-700 text-sm text-slate-700 group-hover:text-slate-50 transition-all transform hover:scale-105">Explore Now</button>
                        </div>
                        <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform z-10">
                            <img src={titan} alt="Ladies Collection" className="max-w-[200px] mx-auto block transform -translate-y-16 group-hover:scale-125 group-hover:rotate-45 duration-300" />
                        </div>
                    </Link>             
                </span>


                <span
                data-aos = "flip-down"
                data-aos-duration = "1000"
                className="relative group rounded-2xl overflow-hidden shadow-lg transition-all transform hover:scale-105 bg-card-3">
                    <Link to="offers">
                        <div className="relative p-6">
                            <h1 className="text-xl sm:text-2xl font-bold text-slate-700 mb-2">Combo Deals</h1>
                            <p className="text-xs text-slate-600 mb-4 font-semibold">This Season, Save Money and Enjoy Unbeatable Prices on Our Exclusive Combo Offers and Packages</p>
                            <button className="border-2 font-semibold border-slate-700 p-2 rounded group-hover:border-slate-50 group-hover:bg-teal-700 text-sm text-slate-700 group-hover:text-slate-50 transition-all transform hover:scale-105">Explore Now</button>
                        </div>
                        <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform z-10">
                            <img src={combo} alt="Combo Deals" className="max-w-[200px] mx-auto block transform -translate-y-16 group-hover:scale-125 group-hover:rotate-45 duration-300" />
                        </div>
                    </Link>
                </span>


                <span
                data-aos = "flip-down"
                data-aos-duration = "1000"
                className="relative group rounded-2xl overflow-hidden shadow-lg transition-all transform hover:scale-105 bg-card-4">
                    <Link to="services">
                        <div className="relative p-6">
                            <h1 className="text-xl sm:text-2xl font-bold text-slate-700 mb-2">Our Services</h1>
                            <ul className="list-disc list-inside">
                                <li className="text-xs text-slate-600  font-semibold">Watch Repair and Maintenance</li>
                                <li className="text-xs text-slate-600 font-semibold">Battery Replacement and Resizing</li>
                                <li className="text-xs text-slate-600  font-semibold">Water Resistance Testing</li>
                            </ul>
                            <button className="border-2 font-semibold border-slate-700 p-2 rounded group-hover:border-slate-50 group-hover:bg-purple-700 text-sm text-slate-700 group-hover:text-slate-50 transition-all transform hover:scale-105">Explore Now</button>
                        </div>
                        <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform z-10">
                            <img src={services} alt="Combo Deals" className="max-w-[200px] mx-auto block transform -translate-y-16 group-hover:scale-125 group-hover:rotate-45 duration-300" />
                        </div>
                    </Link>
                </span>
            </div>
        </div>
    );
};

export default About;
