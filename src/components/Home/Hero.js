import React from "react";

const Hero = () => {
  return (
    <div
      className="bg-black min-h-[60vh] sm:min-h-[90vh] relative"
      style={{
        background:
          "url(https://images.unsplash.com/photo-1596181989198-213069113a6a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <section className="relative pt-24 pb-10 sm:pt-32 sm:pb-16 lg:pb-24 z-10">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="text-4xl font-bold sm:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-white">
                Discover Your Style with Our Collections
              </span>
            </h1>
            <p className="mt-5 text-base text-white sm:text-xl">
              Trendy clothing for women and men. Find the perfect outfit for
              every occasion – new arrivals every season
            </p>

            <a
              href="#"
              title=""
              className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-black rounded-lg sm:mt-16"
              role="button"
            >
              Shop Now
              <svg
                className="w-6 h-6 ml-8 -mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
