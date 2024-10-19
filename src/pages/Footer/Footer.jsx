const Footer = () => {
  return (
    <footer className="b text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className= "text-base  font-bold mb-3 lg:mb-4">About Desh88</h3>
          <p className="text-sm lg:text-base !leading-[180%] text">
          Desh88 was established in 2017 and operated under a Curacao gaming
            license with more than 2 million users. Desh88 is one of Asia’s
            most trusted and leading online casinos and sports betting
            platforms. Members who sign up will receive 5 free spins and have a
            chance to win exciting prizes.
          </p>
        </div>

        <div>
          <h3 className="text-base  font-bold mb-3 lg:mb-4">About</h3>
          <ul>
            <li><a href="#" className="text-sm lg:text-base !leading-[180%] text" >VIP</a></li>
            <li><a href="#" className="text-sm lg:text-base !leading-[180%] text" >Affiliate Program</a></li>
          </ul>
        </div>
        {/* Info Section */}
        <div>
          <h3 className="text-base  font-bold mb-3 lg:mb-4">Info</h3>
          <ul>
            <li><a href="#" className="text-sm lg:text-base !leading-[180%] text" >Terms & Conditions</a></li>
            <li><a href="#" className="text-sm lg:text-base !leading-[180%] text" >FAQ</a></li>
            <li><a href="#" className="text-sm lg:text-base !leading-[180%] text" >Privacy Policy</a></li>
            <li><a href="3" className="text-sm lg:text-base !leading-[180%] text" >Disconnection Policy</a></li>
            <li><a href="#" className="text-sm lg:text-base !leading-[180%] text" >Responsible Gambling</a></li>
            <li><a href="#" className="text-sm lg:text-base !leading-[180%] text" >Contact Us</a></li>
          </ul>
        </div>

        {/* Payment Methods */}
        <div>
          <h3 className="text-base  font-bold mb-3 lg:mb-4">Payment Methods</h3>
          <div className="flex space-x-4">
            <img
              src="https://www.jeet-winbd.win/images/remindinfo/payment-bkash.svg"
              alt="bKash"
              className="w-12 h-12"
            />
            <img
              src="https://www.jeet-winbd.win/images/remindinfo/payment-nagad.svg"
              alt="Nagad"
              className="w-12 h-12"
            />
            <img
              src="https://www.jeet-winbd.win/images/remindinfo/payment-rocket.svg"
              alt="Rocket"
              className="w-12 h-12"
            />
            <img
              src="https://www.jeet-winbd.win/images/remindinfo/payment-astropay.svg"
              alt="AstroPay"
              className="w-12 h-12"
            />
            <img
              src="https://www.jeet-winbd.win/images/remindinfo/payment-usdt.svg"
              alt="Tether"
              className="w-12 h-12"
            />
          </div>
        </div>
        {/* Licenses */}
        <div>
          <h3 className="text-base  font-bold mb-3 lg:mb-4">Licenses</h3>
          <div className="flex space-x-4">
            <img
              src="https://download.ocms365.com/v2/JEETWIN/images/remindinfo/license.svg"
              alt="License"
              className="w-12 h-12"
            />
            <img
              src="https://download.ocms365.com/v2/JEETWIN/images/remindinfo/18ximg.svg"
              alt="18+"
              className="w-12 h-12"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Social Media Links */}
        <div>
          <h3 className="text-base  font-bold mb-3 lg:mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <img
              src="https://download.ocms.cloud/v2/JWB0/Community.1.jpeg?version=1"
              alt="Facebook"
              className="w-8 h-8"
            />
            <img
              src="https://download.ocms.cloud/v2/JWB0/Community.2.jpeg?version=1"
              alt="Instagram"
              className="w-8 h-8"
            />
            <img
              src="https://download.ocms.cloud/v2/JWB0/Community.3.jpeg?version=1"
              alt="X"
              className="w-8 h-8"
            />
            <img
              src="https://download.ocms.cloud/v2/JWB0/Community.4.jpeg?version=0g"
              alt="Email"
              className="w-8 h-8"
            />
          </div>
        </div>

        {/* Download App */}
        <div>
          <h3 className="text-base  font-bold mb-3 lg:mb-4">Download App</h3>
          <div className="flex space-x-4">
            <img
              src="https://download.ocms365.com/v2/JEETWIN/images/remindinfo/ios-dark.svg"
              alt="App Store"
              className="w-28"
            />
            <img
              src="https://download.ocms365.com/v2/JEETWIN/images/remindinfo/android-dark.svg"
              alt="Google Play"
              className="w-28"
            />
          </div>
        </div>
      </div>
      
      <div className="mt-10 ">
        <p className="text-center text-base text-white drak:text-black">
          copyright 2024 | Desh88 | All Right Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
