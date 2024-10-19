import Marquee from "react-fast-marquee";

const Notices = () => {
  return (
    <div className=" mt-1 dark:bg-[#F2F2F2]">
      <div className="flex pl-5vw pr-5vw">
        <div className=" pl-5 pr-2 text-black dark:text-white font-bold uppercase  rounded-r-md">
          <img
            className=" text-[#F4BD29]"
            src="https://www.jeet-winbd.win/images/chips.webp"
            alt=""
          />
        </div>
        <Marquee className="text-white bg-[#22252A] dark:bg-[#F2F2F2] dark:text-black ">
          <ul className="flex">
            <li className=" mx-10">
              <span className=" mr-2 text-[#F4BD29]">
                New Cashback Promotion Launched!
              </span>
              <span>
                You will get cashback every Monday depending on your VIP level
              </span>
            </li>
            <li className=" mx-10">
              <span className=" mr-2 text-[#F4BD29]">
                New promotion 2% deposit bonus !
              </span>
              <span> You will get 2% bonus on every deposit.</span>
            </li>
            <li className=" mx-10">
              <span className=" mr-2 text-[#F4BD29]">
                50% Affiliate Commission
              </span>
              <span>
                Become a Desh88 Affiliate! Promotion Desh88 and earn lifetime
                commission.
              </span>
            </li>
            <li className=" mx-10">
              <span className=" mr-2 text-[#F4BD29]">
                Sign up to get 5 Free spins
              </span>
              <span>
                Get a chance to win an 14 iPhone Pro max, cash rewards and more.
              </span>
            </li>
            <li className=" mx-10">
              <span className=" mr-2 text-[#F4BD29]">
                {" "}
                Worry Less, play more!
              </span>
              <span>Get Cashback every Monday up to 1,000,000</span>
            </li>
          </ul>
        </Marquee>
      </div>
    </div>
  );
};

export default Notices;
