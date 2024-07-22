"use client";
import React, { useState } from "react";

const Industries = () => {
  const [activeProject, setActiveProject] = useState("Project 1");

  const projects = ["Project 1", "Project 2", "Project 3", "Project 4"];

  const handleButtonClick = (project) => {
    setActiveProject(project);
  };

  return (
    <div className="bg-gray-100 my-12">
      {/* Industries 15 */}
      <div className="w-5/6 m-auto font-semibold py-12 ">
        <h2 className="lg:w-1/2 text-2xl md:text-4xl mb-8">
          Developed more than <span className="text-orange-500">100</span>{" "}
          projects in <span className="text-orange-400">15</span> industries
        </h2>
        <div className="text-lg flex flex-wrap md:justify-between">
          <div>
            <div className="flex items-center gap-4">
              <img src="./Frame 2 (1).svg" alt="" />
              <h4>Social media</h4>
            </div>
            <div className="flex items-center gap-4">
              <img src="./Frame 2 (2).svg" alt="" />
              <h4>Fitness and sport</h4>
            </div>
            <div className="flex items-center gap-4">
              <img src="./Frame 2 (3).svg" alt="" />
              <h4>Bank</h4>
            </div>
            <div className="flex items-center gap-4">
              <img src="./Frame 2 (4).svg" alt="" />
              <h4>Construction</h4>
            </div>
            <div className="flex items-center gap-4">
              <img src="./Frame 2 (5).svg" alt="" />
              <h4>Game projects</h4>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-4">
              <img src="./Frame 2.svg" alt="" />
              <h4>Education</h4>
            </div>
            <div className="flex items-center gap-4">
              <img src="./Frame 2 (6).svg" alt="" />
              <h4>Auto, transport</h4>
            </div>
            <div className="flex items-center gap-4">
              <img src="./Frame 2 (7).svg" alt="" />
              <h4>Medicine, health</h4>{" "}
            </div>
            <div className="flex items-center gap-4">
              <img src="./Frame 2 (8).svg" alt="" />
              <h4>Restaurants, food delivery</h4>
            </div>
            <div className="flex items-center gap-4">
              <img src="./Frame 2 (9).svg" alt="" />
              <h4>Marketplaces</h4>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-4">
              <img src="./Frame 2 (10).svg" alt="" />
              <h4>AR technology</h4>
            </div>
            <div className="flex items-center gap-4">
              <img src="./Frame 2 (11).svg" alt="" />
              <h4>TV series</h4>
            </div>
            <div className="flex items-center gap-4">
              <img src="./Frame 2 (12).svg" alt="" />
              <h4>Startups</h4>
            </div>
            <div className="flex items-center gap-4">
              <img src="./Frame 2 (13).svg" alt="" />
              <h4>Religion</h4>
            </div>
            <div className="flex items-center gap-4">
              <img src="./Frame 2 (14).svg" alt="" />
              <h4>Online cources</h4>
            </div>
          </div>
        </div>
      </div>
      {/* test part project1 */}
      <div className="w-5/6 m-auto mt-6">
        <div className="lg:w-1/2 md:w-3/4">
          <h2 className="text-4xl font-bold">Projects we are proud of</h2>
          <p className="text-lg py-6">
            Our software development company is truly proud of the wonderful
            clients we have worked with. We enjoy a long-term partnership
          </p>
        </div>
        {/* part 2 show project */}
        <div className="mt-6">
          <div className="flex space-x-8">
            {projects.map((project) => (
              <button
                key={project}
                onClick={() => handleButtonClick(project)}
                className={`relative pb-2 font-semibold text-gray-900 focus:outline-none ${
                  activeProject === project ? "active" : ""
                }`}
              >
                {project}
                {activeProject === project && (
                  <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-500"></span>
                )}
              </button>
            ))}
          </div>
          {/* project data 😎😎 */}
          <div className="py-12 flex flex-col lg:flex-row items-center lg:items-start">
            {/* Project Description */}
            <div className="flex-1 lg:mr-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {activeProject}
              </h1>
              <p className=" mb-4">
                Crafted an innovative rental property management app, seamlessly
                integrating secure login, absence registration, and a tenant
                notice board. Elevating the resident experience with
                user-friendly design and efficient communication channels.
              </p>
              <p className="mb-4">
                Business analysis / iOS / Android / QA / UI/UX Design
              </p>
              <p className="mb-4">
                <span className="inline-flex items-center mr-2 gap-2">
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.99933 11C9.93233 11 11.4993 9.433 11.4993 7.5C11.4993 5.567 9.93233 4 7.99933 4C6.06633 4 4.49933 5.567 4.49933 7.5C4.49933 9.433 6.06633 11 7.99933 11ZM7.99933 9.19999C8.93821 9.19999 9.69933 8.43887 9.69933 7.49999C9.69933 6.5611 8.93821 5.79999 7.99933 5.79999C7.06044 5.79999 6.29933 6.5611 6.29933 7.49999C6.29933 8.43887 7.06044 9.19999 7.99933 9.19999Z"
                      fill="#FFBA00"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.242188 7.76987C0.242188 3.48026 3.71361 0 7.99933 0C12.2851 0 15.7565 3.48026 15.7565 7.76987C15.7565 10.903 13.7824 14.6225 10.1917 18.8679C10.0886 18.9898 9.97554 19.1029 9.85363 19.206C8.64279 20.2301 6.83101 20.0787 5.80691 18.8679L5.23983 18.1974L5.24559 18.1923C2.01105 14.2269 0.242188 10.7357 0.242188 7.76987ZM7.18434 17.7091C7.56701 18.1576 8.24064 18.2128 8.69123 17.8317C8.73672 17.7932 8.77892 17.751 8.8174 17.7055C12.3626 13.5139 13.9565 10.2221 13.9565 7.76987C13.9565 4.47123 11.2878 1.8 7.99933 1.8C4.71086 1.8 2.04219 4.47123 2.04219 7.76987C2.04219 10.2221 3.63606 13.5139 7.18126 17.7055L7.18434 17.7091Z"
                      fill="#FFBA00"
                    />
                  </svg>
                  India
                </span>
                <span className="inline-flex items-center gap-2">
                  <svg
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.16616 0.09961H9.20157H10.8016H10.837H10.837C11.3669 0.0995957 11.818 0.0995836 12.1885 0.129849C12.5776 0.161644 12.9562 0.231278 13.3181 0.415692C13.8638 0.693725 14.3075 1.13737 14.5855 1.68304C14.7699 2.04497 14.8395 2.42357 14.8713 2.81273C14.9004 3.16801 14.9015 3.59758 14.9016 4.09961H15.8016L15.837 4.09961C16.3668 4.0996 16.818 4.09958 17.1884 4.12985C17.5776 4.16164 17.9562 4.23128 18.3181 4.41569C18.8638 4.69372 19.3075 5.13737 19.5855 5.68304C19.7699 6.04497 19.8395 6.42356 19.8713 6.81273C19.9016 7.18315 19.9016 7.63432 19.9016 8.16417V8.16419V8.16421V8.19961V9.59961V9.63295C19.9016 10.0245 19.9016 10.3709 19.8781 10.6581C19.8532 10.9639 19.7971 11.2807 19.64 11.5892C19.4099 12.0408 19.0427 12.4079 18.5911 12.638C18.3633 12.7541 18.1308 12.815 17.9016 12.849V13.3996V13.4358C17.9016 14.035 17.9016 14.5386 17.8679 14.9507C17.8327 15.3815 17.7563 15.791 17.5582 16.1797C17.2562 16.7724 16.7743 17.2543 16.1816 17.5563C15.793 17.7543 15.3835 17.8308 14.9526 17.866C14.5406 17.8996 14.037 17.8996 13.4378 17.8996H13.4377L13.4016 17.8996H6.60157L6.56542 17.8996H6.56532C5.96608 17.8996 5.46254 17.8996 5.05048 17.866C4.61963 17.8308 4.21017 17.7543 3.8215 17.5563C3.22878 17.2543 2.7469 16.7724 2.4449 16.1797C2.24686 15.791 2.17041 15.3815 2.13521 14.9507C2.10154 14.5386 2.10155 14.035 2.10156 13.4358L2.10157 13.3996V12.849C1.87236 12.815 1.63988 12.7541 1.41199 12.638C0.960399 12.4079 0.593246 12.0408 0.36315 11.5892C0.205984 11.2807 0.149974 10.9639 0.124991 10.6581C0.10153 10.371 0.101546 10.0245 0.101563 9.63299V9.63295L0.101566 9.59961V8.19961L0.101563 8.16421V8.16415C0.10155 7.63431 0.101539 7.18314 0.131803 6.81273C0.163599 6.42357 0.233233 6.04497 0.417647 5.68304C0.695679 5.13737 1.13932 4.69372 1.68499 4.41569C2.04693 4.23128 2.42552 4.16164 2.81468 4.12985C3.18511 4.09958 3.63629 4.0996 4.16616 4.09961L4.20157 4.09961H5.10157C5.1016 3.59758 5.10277 3.16801 5.1318 2.81273C5.1636 2.42357 5.23323 2.04497 5.41765 1.68304C5.69568 1.13737 6.13932 0.693725 6.68499 0.415692C7.04693 0.231278 7.42552 0.161644 7.81468 0.129849C8.18511 0.0995836 8.63628 0.0995957 9.16614 0.09961H9.16616ZM3.40157 11.0996H16.6016C17.0365 11.0996 17.3085 11.0989 17.5135 11.0822C17.7079 11.0663 17.7615 11.0405 17.774 11.0342C17.8869 10.9767 17.9786 10.8849 18.0362 10.772C18.0425 10.7596 18.0682 10.706 18.0841 10.5115C18.1009 10.3065 18.1016 10.0345 18.1016 9.59961V8.19961C18.1016 7.62471 18.1009 7.24766 18.0773 6.9593C18.0546 6.68146 18.0152 6.56611 17.9817 6.50022C17.8762 6.29324 17.7079 6.12496 17.501 6.0195C17.4351 5.98593 17.3197 5.94657 17.0419 5.92387C16.7535 5.90031 16.3765 5.89961 15.8016 5.89961H14.9016V5.89962H14.0016H6.00157H5.10157V5.89961H4.20157C3.62666 5.89961 3.24961 5.90031 2.96126 5.92387C2.68341 5.94657 2.56807 5.98593 2.50218 6.0195C2.2952 6.12496 2.12692 6.29324 2.02146 6.50022C1.98789 6.56611 1.94853 6.68146 1.92582 6.9593C1.90227 7.24766 1.90157 7.62471 1.90157 8.19961V9.59961C1.90157 10.0345 1.90227 10.3065 1.91901 10.5115C1.9349 10.706 1.96064 10.7596 1.96696 10.772C2.02449 10.8849 2.11627 10.9767 2.22917 11.0342C2.24158 11.0405 2.29519 11.0663 2.48966 11.0822C2.69464 11.0989 2.96668 11.0996 3.40157 11.0996ZM3.90157 12.8996V13.3996C3.90157 14.0445 3.90227 14.4741 3.92923 14.8041C3.95534 15.1237 4.00151 15.2699 4.04871 15.3625C4.17814 15.6165 4.38466 15.823 4.63868 15.9525C4.73131 15.9997 4.87752 16.0458 5.19706 16.0719C5.5271 16.0989 5.95666 16.0996 6.60157 16.0996H13.4016C14.0465 16.0996 14.476 16.0989 14.8061 16.0719C15.1256 16.0458 15.2718 15.9997 15.3645 15.9525C15.6185 15.823 15.825 15.6165 15.9544 15.3625C16.0016 15.2699 16.0478 15.1237 16.0739 14.8041C16.1009 14.4741 16.1016 14.0445 16.1016 13.3996V12.8996H3.90157ZM13.0773 2.9593C13.0995 3.23059 13.1014 3.5804 13.1016 4.09961H6.90158C6.90173 3.5804 6.90366 3.23059 6.92582 2.9593C6.94853 2.68146 6.98789 2.56611 7.02146 2.50022C7.12692 2.29324 7.2952 2.12496 7.50218 2.0195C7.56807 1.98593 7.68341 1.94657 7.96126 1.92387C8.24961 1.90031 8.62666 1.89961 9.20157 1.89961H10.8016C11.3765 1.89961 11.7535 1.90031 12.0419 1.92387C12.3197 1.94657 12.4351 1.98593 12.501 2.0195C12.7079 2.12496 12.8762 2.29324 12.9817 2.50022C13.0152 2.56611 13.0546 2.68146 13.0773 2.9593Z"
                      fill="#FFBA00"
                    />
                  </svg>
                  Real Estate
                </span>
              </p>
              <div className="flex items-center mb-4">
                <div className="mr-8">
                  <span className="text-2xl font-bold text-gray-900">400%</span>
                  <p className="text-gray-500">User Growth</p>
                </div>
                <div>
                  <span className="text-2xl font-bold text-gray-900">
                    + 200 000
                  </span>
                  <p className="text-gray-500">Active Users</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <a href="#">
                  <img src="./ios.svg" alt="App Store" />
                </a>
                <a href="#">
                  <img src="./android.svg" alt="Google Play" />
                </a>
              </div>
            </div>
            {/* Project Image */}
            <div className="md:ml-24 flex-1 mt-8 lg:mt-0">
              <img src="/project1.png" alt="Project" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
