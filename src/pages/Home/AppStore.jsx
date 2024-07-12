import { Link } from "react-router-dom";
import appstore from "../../assets/images/home-page/appstore-section/app-store.png";
import playstore from "../../assets/images/home-page/appstore-section/play-store.png";

const AppStore = () => 
{
  return (
    <div className="w-full">
        <div className="py-14 bg-appstore bg-contain sm:bg-cover bg-no-repeat bg-center w-full h-full" >
            <div className="">
                <div className="flex justify-center items-center w-full">
                    <div className="mx-auto">

                        <h1 
                        data-aos="zoom-in"
                        data-aos-duration="300"
                        className="text-sm text-center sm:text-2xl font-semibold text-white/90">
                            TIMEZEN is now available for <br />Android and IOS
                        </h1>
                        <div 
                        data-aos="zoom-out"
                        data-aos-duration="500"
                        className="flex justify-center items-center">
                            <Link to="#">
                                <img
                                    src={appstore}
                                    alt="Play store"
                                    className="max-w-[100px] sm:max-w-[120px] md:max-w-[200px]"/>
                            </Link>
                            <Link to="#">
                                <img
                                    src={playstore}
                                    alt="App store"
                                    className="max-w-[100px] sm:max-w-[120px] md:max-w-[200px]"/>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
      </div>
    </div>
  )
}

export default AppStore