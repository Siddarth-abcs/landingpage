import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const Planat = () => {
  const testimonials = [
    {
      quote: "image-10@2x.png",
    },
    {
      quote: "image-10@2x.png",
    },
    {
      quote: "image-10@2x.png",
    },
    {
      quote: "image-10@2x.png",
    },
    {
      quote: "image-10@2x.png",
    },
    {
      quote: "image-10@2x.png",
    },
    {
      quote: "image-10@2x.png",
    },
  ];
  return (
    <div className="w-full bg-white">
      <div className="w-11/12 m-auto border border-y-2 border-x-0 mb-8">
        <div className="h-[20] mt-8 md:mt-0 rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="fast"
          />
        </div>
      </div>
      <div className="w-5/6 mt-8 m-auto flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-4xl font-bold mt-8 md:mt-0">
            Full development cycle
          </h2>
          <p className="my-6">We use proven technologies</p>
          <div>
            <h3 className="text-2xl font-semibold my-2">Web</h3>
            <p>
              PHP / Javascript / Node.JS / Web Socket / Socket.io / Vue.js /
              Nuxt / MySQL / Laravel / GO lang / Django / Python
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold my-2">Mobile</h3>
            <p>
              Swift / Kotlin / Alamofire / Firebase / CoreData / Room / Realm /
              Coroutine / RxJava / RxSwift / Unit Test / Navigation
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:ml-40 flex flex-col text-xl gap-4">
          <a className="flex items-center" href="#">
            <span className="mr-4 hover:font-bold hover:underline">
              iOS development
            </span>
            <img className="h-4" src="./↳ Icon Color.png" alt="" />
          </a>
          <a className="flex items-center" href="#">
            <span className="mr-4 hover:font-bold hover:underline">
              Android development
            </span>
            <img className="h-4" src="./↳ Icon Color.png" alt="" />
          </a>
          <a className="flex items-center" href="#">
            <span className="mr-4 hover:font-bold hover:underline">
              Web development
            </span>
            <img className="h-4" src="./↳ Icon Color.png" alt="" />
          </a>
          <a className="flex items-center" href="#">
            <span className="mr-4 hover:font-bold hover:underline">
              UI/UX design
            </span>
            <img className="h-4" src="./↳ Icon Color.png" alt="" />
          </a>
          <a className="flex items-center" href="#">
            <span className="mr-4 hover:font-bold hover:underline">
              Testing
            </span>
            <img className="h-4" src="./↳ Icon Color.png" alt="" />
          </a>
          <a className="flex items-center" href="#">
            <span className="mr-4 hover:font-bold hover:underline">Launch</span>
            <img className="h-4" src="./↳ Icon Color.png" alt="" />
          </a>
          <a className="flex items-center" href="#">
            <span className="mr-4 hover:font-bold hover:underline">
              IT consulting
            </span>
            <img className="h-4" src="./↳ Icon Color.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Planat;
