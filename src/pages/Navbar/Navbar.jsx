import { Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { MdWbSunny } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";
import { MdOutlineClose } from "react-icons/md";
import Navlogo from '../../../public/betaing.jpg'
import SignUp from "../../components/SignUp";
import LanguageSelector from "../../components/LangagueChanger";
import Login from "../../components/Login";
const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // Add state for dark mode
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const [isLoginOpen, setIsLoginOpen] = useState(false);


  const toggleDarkMode = () => setIsDarkMode((prevState) => !prevState); // Add toggle function

  const menuItems = [
    "VIP",
    "Referral",
    "Spin & Win",
    "Leaderboard",
    "Affiliates",
    "Terms & Conditions",
    "FAQ",
    "Privacy Policy",
    "Disconnection Policy",
    "Responsible Gambling"
  ]


  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode); // Apply dark class to body
  }, [isDarkMode]);
  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  const toggleSignUp = () => setIsSignUpOpen(!isSignUpOpen);

  const toggleLanguage = () => setIsLanguageOpen(!isLanguageOpen);
  const toggleLogin = () => setIsLoginOpen(!isLoginOpen);
  return (
    <nav className="bg-black p-4 text-white dark:bg-white dark:text-black ">

      {isSignUpOpen && <SignUp toggleSignUp={toggleSignUp} />}
      {isLanguageOpen && <LanguageSelector toggleLanguage={toggleLanguage} />}
      {isLoginOpen && <Login toggleLogin={toggleLogin} />}
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={Navlogo} className=" w-[130px] h-[30px]" alt="Desh88" />
        </div>
        <div className=" flex space-x-4">
          <div className="flex space-x-4">
            <from className=" hidden md:flex gap-2 ">
              <label className="input input-bordered flex items-center text-sm gap-2 dark:bg-[#121111]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-6 w-6 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input type="text" className="grow" placeholder="Username" />
              </label>
              <label className="input input-bordered flex items-center text-sm gap-2 dark:bg-[#121111]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-6 w-6 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>

                <div className="relative">
                  <input
                    id="password"
                    type={isVisible ? "text" : "password"}
                    className="grow "
                    placeholder="Password..."
                    aria-label="Password"
                    required
                  />
                  <button
                    className="absolute inset-y-0 end-0 flex items-center z-20 px-2.5 cursor-pointer text-gray-700 rounded-e-md focus:outline-none focus-visible:text-indigo-500 hover:text-indigo-500 transition-colors"
                    type="button"
                    onClick={toggleVisibility}
                    aria-label={isVisible ? "Hide password" : "Show password"}
                    aria-pressed={isVisible}
                    aria-controls="password"
                  >
                    {isVisible ? (
                      <EyeOff size={20} aria-hidden="true" />
                    ) : (
                      <Eye size={20} aria-hidden="true" />
                    )}
                  </button>
                </div>
              </label>
              <input
                className=" bg-[#A0CF2F] rounded-full text-sm px-12"
                type="submit"
                value="Login"
              />
            </from>
            <div className=" flex gap-2">

              <button onClick={() => setIsLoginOpen(!isLoginOpen)} className=" bg-[#A0CF2F] md:hidden rounded-full text-sm px-[12px] md:px-12 py-2">
                Login
              </button>
              <button onClick={() => setIsSignUpOpen(!isSignUpOpen)} className=" bg-[#D64E4E] rounded-full text-sm px-[10px] md:px-12 py-2">
                Sign Up
              </button>
            </div>
          </div>
          <button onClick={toggleLanguage} className="md:block hidden text-3xl bg-white/20 rounded-md px-[10px] py-[1px]"><TfiWorld class="w-4" /></button>
          <button onClick={toggleDarkMode} className="md:block hidden text-3xl bg-white/20 dark:bg-[#F2F2F2] rounded-md px-[10px] py-[1px]"><MdWbSunny class="w-4" /></button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:block hidden text-3xl bg-white/20 dark:bg-[#F2F2F2] rounded-md px-[10px] py-[1px]"><IoMenu class="w-4" /></button>
        </div>
      </div>
      {isMenuOpen &&
        <div className=" bg-black/70 z-[50] fixed inset-0">
          <div className={`  fixed right-0 top-0 h-screen text-white dark:text-black bg-black dark:bg-white w-[400px] transition-transform duration-300  z-[1000]  `}>
            <div className=" p-[60px] flex flex-col gap-7  relative">
              {
                menuItems.map((item, index) => (
                  <a href={`/${item}`} key={index}>
                    {item}
                  </a>
                ))
              }
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="absolute top-[10px] right-[10px] text-3xl bg-white/20 dark:bg-[#F2F2F2] rounded-md px-[10px] py-[1px]"><MdOutlineClose /></button>
            </div>
          </div>
        </div>
      }
    </nav>
  );
};

export default Navbar;
