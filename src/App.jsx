import "./App.css";
import Notices from "./components/Notices";
import Footer from "./pages/Footer/Footer";
import Hero from "./pages/Hero/Hero";
import AdCards from "./pages/Home/AdCards/AdCards";
import BrandCard from "./pages/Home/BrandCard";
import HomeCard from "./pages/Home/HomeCard";
import ToGame from "./pages/Home/ToGame";
import Navbar from "./pages/Navbar/Navbar";
import SubNavbar from "./pages/Navbar/SubNavbar";
import Testimonial from "./pages/Testimonial/Testimonial";
import { RiCustomerService2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { AiFillMessage } from "react-icons/ai";
import { SiTelegram } from "react-icons/si";


function App() {



  return (
    <div className="dark:bg-white">
      <Navbar />
      <SubNavbar />
      <Hero />
      <Notices />
      <HomeCard />
      <ToGame />
      <AdCards />
      <BrandCard />
      <Testimonial />
      <Footer />

      <div className="fixed z-[1000] right-5 bottom-5 w-[60px] h-[60px] group">
        <div className="w-full h-full flex items-center justify-center rounded-full bg-[#F4BD29] cursor-pointer">
          <RxCross2 size={30} className="hidden group-hover:block" />
          <RiCustomerService2Fill size={30} className="block group-hover:hidden" />
        </div>

        <div className="absolute bottom-full mb-2 flex flex-col items-center space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-[60px] h-[60px] bg-gray-300 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-400 transition-colors">
            <AiFillMessage size={30} className="text-slate-600" />
          </button>
          <button className="w-[60px] h-[60px] bg-blue-500 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
            <SiTelegram size={30} className="text-white" />
          </button>
        </div>
      </div>


    </div>
  );
}

export default App;
