"use client";
import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="relative w-full">
        <div className=" absolute inset-0 w-full dark:bg-white bg-white dark:bg-grid-black/[0.2] bg-grid-white/[0.2]"></div>
        <div className="relative flex items-center justify-center w-full">
          {/* task project */}
          <div className="relative w-5/6 md:mt-10 h-screen m-auto flex flex-col lg:flex-row items-center md:gap-x-6">
            {/* Text part */}
            <div className="w-full lg:mt-8 mt-28 md:mt-40 lg:w-1/2">
              <div className="max-w-3xl mx-auto">
                <h1 className="text-2xl lg:text-4xl font-bold text-black text-center lg:text-left leading-normal lg:leading-relaxed">
                  <span className="text-yellow-500">
                    User-Centric Excellence
                  </span>
                  : Our
                  <span className="text-black">
                    {" "}
                    App Development services
                  </span>{" "}
                  Tackles Your Pain Points
                </h1>
                <p className="mt-3 text-sm lg:text-xl text-center lg:text-left text-gray-700 leading-normal lg:leading-relaxed">
                  Experience a Seamless Digital Journey with
                  <span className="text-green-500 font-bold"> Desun</span> -
                  Where Every Line of Code Resolves Your Challenges and{" "}
                  <span className="text-yellow-500 font-bold">
                    Elevates Your App Experience
                  </span>{" "}
                  to Unparalleled Heights.
                </p>
              </div>
            </div>
            {/* Contact box */}
            <div className="lg:w-1/2 lg:ml-5 shadow-md rounded-xl bg-white mt-4 flex flex-col items-start justify-center p-4 box-border gap-8 max-w-full z-10 text-xl text-gray-900">
              <b className="relative tracking-wide leading-6 inline-block max-w-full text-base lg:text-lg">
                Leave your contacts and we will call you back within 30 minutes
              </b>
              <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-4 max-w-full text-base text-gray-700">
                <div className="flex-1 flex flex-col items-start justify-center gap-3 max-w-full">
                  <div className="self-stretch flex flex-col md:flex-row md:items-center justify-start gap-2 md:gap-6">
                    <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-2 min-w-[146px]">
                      <div className="self-stretch relative tracking-tight leading-4 font-medium">
                        Full name
                      </div>
                      <input
                        className="border-none outline-none bg-transparent md:h-6 h-4 text-base text-gray-900"
                        placeholder="My Name"
                        type="text"
                      />
                      <img
                        className="self-stretch h-1.5 max-w-full"
                        alt="Decorative line"
                        src="/vector-214.svg"
                      />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-2 box-border gap-2 min-w-[146px]">
                      <div className="self-stretch relative tracking-tight leading-4 font-medium">
                        Phone number
                      </div>
                      <div className="w-40 flex flex-row items-start justify-start gap-2 text-base text-gray-900">
                        <div className="flex flex-col items-center justify-center py-1 px-0">
                          <img
                            className="w-4 h-3 object-cover"
                            alt="Country code icon"
                            src="/image-4@2x.png"
                          />
                        </div>
                        <div className="relative tracking-tight leading-5 min-w-[28px] whitespace-nowrap">
                          +91
                        </div>
                        <input
                          className="border-none outline-none bg-transparent md:h-6 h-4 text-base text-gray-900"
                          placeholder="000000000"
                          type="text"
                          defaultValue="000000000"
                        />
                      </div>
                      <img
                        className="self-stretch h-1.5 max-w-full"
                        alt="Decorative line"
                        src="/vector-214.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col md:flex-row md:items-center justify-start gap-4">
                    <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-2 min-w-[146px]">
                      <div className="self-stretch relative tracking-tight leading-4 font-medium">
                        Business name
                      </div>
                      <input
                        className="border-none outline-none bg-transparent md:h-6 h-4 text-base text-gray-900"
                        placeholder="ABC Technologies PVT LTD"
                        type="text"
                        defaultValue="ABC Technologies PVT LTD"
                      />
                      <img
                        className="self-stretch h-1.5 max-w-full"
                        alt="Decorative line"
                        src="/vector-214.svg"
                      />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-2 min-w-[146px]">
                      <div className="self-stretch relative tracking-tight leading-4 font-medium">
                        Business mail
                      </div>
                      <input
                        className="border-none outline-none bg-transparent md:h-6 h-4 text-base text-gray-900"
                        placeholder="demoaccount@gmail.com"
                        type="text"
                        defaultValue="demoaccount@gmail.com"
                      />
                      <img
                        className="self-stretch h-1.5 max-w-full"
                        alt="Decorative line"
                        src="/vector-214.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-orange-400 flex flex-row items-start justify-start py-3 px-6 text-center text-sm text-white">
                  <div className="relative tracking-tight leading-5 font-semibold">
                    Get consultation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
