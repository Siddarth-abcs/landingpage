"use client";
import React from "react";
import { Vortex } from "../ui/vortex";

const DiscussProject = () => {
  return (
    <div className="bg-gray-100 mx-auto -mt-12 lg:h-[24rem] md:h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center bg-gray flex-col justify-center"
      >
        <div className="w-5/6 my-6 lg:pb-12 lg:h-[24rem] md:h-[30rem] m-auto flex flex-col md:flex-row items-center justify-between">
          {/* Part 1 */}
          <div className="mt-8 text-white text-center md:text-left">
            <h1 className="text-4xl font-bold mb-2">Let's discuss</h1>
            <h2 className="text-4xl font-bold mb-2">Your project</h2>
            <p className="text-lg my-6">
              Let's figure out how to create an effective application,<br></br>
              its cost and terms of its development
            </p>
          </div>
          {/* Part 2 */}
          <div className="w-full md:w-1/2 bg-white p-6 my-8 rounded-md flex flex-col items-stretch justify-start gap-4 text-base text-gray-700">
            <div className="flex flex-col lg:flex-row items-start md:items-center justify-start gap-4 md:gap-6">
              <div className="flex-1 flex flex-col items-start justify-start gap-2 min-w-[146px]">
                <div className="tracking-tight leading-4 font-medium">
                  Full name
                </div>
                <input
                  className="border-none outline-none bg-transparent h-8 md:h-6 text-base text-gray-900"
                  placeholder="My Name"
                  type="text"
                />
                <img
                  className="h-1.5 w-full"
                  alt="Decorative line"
                  src="/vector-214.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-2 min-w-[146px]">
                <div className="tracking-tight leading-4 font-medium">
                  Phone number
                </div>
                <div className="flex flex-row items-start justify-start gap-2 text-base text-gray-900">
                  <div className="flex flex-col items-center justify-center py-1 px-0">
                    <img
                      className="w-4 h-3 object-cover"
                      alt="Country code icon"
                      src="/image-4@2x.png"
                    />
                  </div>
                  <div className="tracking-tight leading-5 min-w-[28px] whitespace-nowrap">
                    +91
                  </div>
                  <input
                    className="border-none -mt-1 outline-none bg-transparent h-8 md:h-6 text-base text-gray-900"
                    placeholder="000000000"
                    type="text"
                    defaultValue="000000000"
                  />
                </div>
                <img
                  className="h-1.5 w-full"
                  alt="Decorative line"
                  src="/vector-214.svg"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-start gap-4 md:gap-6">
              <div className="flex-1 flex flex-col items-start justify-start gap-2 min-w-[146px]">
                <div className="tracking-tight leading-4 font-medium">
                  Business name
                </div>
                <input
                  className="border-none outline-none bg-transparent h-8 md:h-6 text-base text-gray-900"
                  placeholder="ABC Technologies PVT LTD"
                  type="text"
                  defaultValue="ABC Technologies PVT LTD"
                />
                <img
                  className="h-1.5 w-full"
                  alt="Decorative line"
                  src="/vector-214.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-2 min-w-[146px]">
                <div className="tracking-tight leading-4 font-medium">
                  Business mail
                </div>
                <input
                  className="border-none outline-none bg-transparent h-8 md:h-6 text-base text-gray-900"
                  placeholder="demoaccount@gmail.com"
                  type="text"
                  defaultValue="demoaccount@gmail.com"
                />
                <img
                  className="h-1.5 w-full"
                  alt="Decorative line"
                  src="/vector-214.svg"
                />
              </div>
            </div>
            <div className="bg-blue-600 flex items-center justify-center py-3 px-6 text-sm text-white rounded-md">
              <div className="tracking-tight leading-5 font-semibold">
                Discuss the Project
              </div>
            </div>
          </div>
        </div>
      </Vortex>
    </div>
  );
};

export default DiscussProject;
