import React from "react";
import { PinContainer } from "../ui/3d-pin";

function DevelopmentStage() {
  return (
    <div className="w-5/6 m-auto my-16">
      <h2 className="text-3xl md:text-4xl font-bold my-12">
        Application Development Stages
      </h2>
      <div className="grid md:grid-cols-3 grid-cols-1 items-center">
        <div className="flex flex-col gap-4 ">
          <div className="p-4 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <h5 className="flex items-center text-xl font-bold gap-4">
              <img src="/planing.svg" alt="" />
              Analysis
            </h5>
            <p className="my-4">
              We craft precise technical specs, aligning with your business,
              technology, and user requirements.
            </p>
          </div>
          <div className="p-4 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <h5 className="flex items-center text-xl font-bold gap-4">
              <img src="/graphic-design.svg" alt="" />
              Design
            </h5>
            <p className="my-4">
              We adapt the customer's corporate identity to the platform
              guidelines. We draw convenient and understandable interfaces.
            </p>
          </div>
          <div className="p-4 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <h5 className="flex items-center text-xl font-bold gap-4">
              <img src="/coding-language.svg" alt="" />
              Development
            </h5>
            <p className="my-4">
              We create an extensible architecture, write clean and stable code.
              We integrate with customer technologies.
            </p>
          </div>
        </div>
        <div className="h-90 bg-ye">
          <img className="md:hidden" src="/hopegif1@2x.png" alt="" />
          <div className="hidden md:flex">
            <PinContainer title="contact Siddarth +91 9310674707" href="">
              <div className="flex flex-col text-slate-100/50 w-[24rem] ">
                <img className="w-full" src="/hopegif1@2x.png" alt="" />
              </div>
            </PinContainer>
          </div>
        </div>
        <div className="flex flex-col gap-4 ">
          <div className="p-4 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <h5 className="flex items-center text-xl font-bold gap-4">
              <img src="/security.svg" alt="" />
              Testing
            </h5>
            <p className="my-4">
              We carry out functional testing and do bug fixes. We adapt the
              application to different phone resolutions
            </p>
          </div>
          <div className="p-4 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <h5 className="flex items-center text-xl font-bold gap-4">
              <img src="/hosting 1.svg" alt="" />
              Launching
            </h5>
            <p className="my-4">
              We design the application page and publish it in the App Store and
              Google Play stores.
            </p>
          </div>
          <div className="p-4 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <h5 className="flex items-center text-xl font-bold gap-4">
              <img src="/application.svg" alt="" />
              Support
            </h5>
            <p className="my-4">
              We monitor the stability of the application, update it for new
              devices and versions of iOS and Android.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DevelopmentStage;
