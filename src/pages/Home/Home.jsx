import ContainerBox from "../../components/containers/ContainerBox"
import Hero from "./Hero";
import About from "./About";
import LatestWatches from "./LatestWatches";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import ComboDeal from "./ComboDeal";
import PremiumCollection from "./PremiumCollection";
import Services from "./Services";
import AppStore from "./AppStore";
import Contact from "./Contact";
import FastestDelivery from "./FastestDelivery";
AOS.init();


const Home = () => 
{
  return (
    <ContainerBox title= "Home | TIMEZEN - A Reliable Watch Store">
      <div className="relative z-10">
        <Hero />
        <About />
        <LatestWatches/>
        <ComboDeal/>
        <PremiumCollection/>
        <Services/>
        <AppStore/>
        <FastestDelivery/>
        <Contact/>
      </div>
    </ContainerBox>
  )
}

export default Home