import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="md:w-11/12 m-auto py-8 bg-black md:rounded-xl">
        {/* part1 */}
        <div className="flex justify-start md:justify-center">
          <img src="/logo-bg-3 2 (1).svg" alt="" />
        </div>
        {/* part2 */}
        <div className="text-white mx-12 my-6 flex flex-col md:flex-row flex-wrap md:justify-around">
          <div className="">
            <div className="flex text-gray-500 gap-2">
              <img src="/smartphone_outline_24.svg" alt="" />
              <h6>Contact nums</h6>
            </div>
            <p>+91 0000000000</p>
          </div>
          <div>
            <div className="flex text-gray-500 gap-2">
              <img src="/mail_outline_24.svg" alt="" />
              <h6>Gmail</h6>
            </div>
            <p>demo@gmail.com</p>
          </div>
          <div>
            <div className="flex text-gray-500 gap-2">
              <img src="/place_outline_24.svg" alt="" />
              <h6>Address</h6>
            </div>
            <p>Mumbai, India</p>
          </div>
          <div>
            <div className="flex text-gray-500 gap-2">
              <img src="./document_outline_24.svg" alt="" />
              <h6>Leave a request</h6>
            </div>
            <p>Leave a request</p>
          </div>
        </div>
        {/* part3 */}
        <div className="mx-12 md:mx-0 md:text-center text-white">
          <p>We work throughout the world</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
