import About from "../Components/Home/About";
import { Accreditations } from "../Components/Home/Accreditations";
import { Achievements } from "../Components/Home/Achievements";
import { Contact } from "../Components/Home/Contact";
import Hero from "../Components/Home/Hero";
import Leadership from "../Components/Home/Leadership";
import Programs from "../Components/Home/Programs";
import { Testimonials } from "../Components/Home/Testimonials";
import VisionMission from "../Components/Home/VisionMission";
import { WhyUs } from "../Components/Home/WhyUs";
import '../Styles/home.css'
const Home = () => {
    return (
        <>
        <Hero/>
        <About/>
        <VisionMission/>
        <Leadership/>
        <Programs/>
        <WhyUs/>
        <Accreditations/>
        <Achievements/>
        <Testimonials/>
        <Contact/>
        </>
    );
};


export default Home;