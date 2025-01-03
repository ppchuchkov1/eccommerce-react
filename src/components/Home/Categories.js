import React from "react";
import categoryImage1 from "../../images/category-1.jpg";
import categoryImage2 from "../../images/category-2.jpg";
import categoryImage3 from "../../images/category-3.jpg";
import categoryImage4 from "../../images/category-4.jpg";

const Categories = () => {
  return (
    <div class="flex justify-center items-center">
      <div class="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
        <div class="flex flex-col jusitfy-center items-center space-y-10">
          <div class="flex flex-col justify-center items-center ">
            <h1 class="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800 dark:text-white">
              Shop By Category
            </h1>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 w-full">
            <div class="relative group flex justify-center items-center h-full w-full">
              <img
                class="object-center object-cover h-full w-full"
                src={categoryImage1}
                alt="girl-image"
              />
              <button class="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                Women
              </button>
              <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
            </div>

            <div class="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
              <div class="relative group flex justify-center items-center h-full w-full">
                <img
                  class="object-center object-cover h-full w-full"
                  src={categoryImage2}
                  alt="shoe-image"
                />
                <button class="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                  Shoes
                </button>
                <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
              </div>
              <div class="relative group flex justify-center items-center h-full w-full">
                <img
                  class="object-center object-cover h-full w-full"
                  src={categoryImage3}
                  alt="watch-image"
                />
                <button class="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                  Watches
                </button>
                <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
              </div>
            </div>

            <div class="relative group justify-center items-center h-full w-full hidden lg:flex">
              <img
                class="object-center object-cover h-full w-full"
                src={categoryImage4}
                alt="girl-image"
              />
              <button class="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                Accessories
              </button>
              <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
            </div>
            <div class="relative group flex justify-center items-center h-full w-full mt-4 md:hidden md:mt-8 lg:hidden">
              <img
                class="object-center object-cover h-full w-full hidden md:block"
                src="https://i.ibb.co/6FjW19n/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2.png"
                alt="girl-image"
              />
              <img
                class="object-center object-cover h-full w-full md:hidden"
                src="https://i.ibb.co/sQgHwHn/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png"
                alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2"
              />
              <button class="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                Accessories
              </button>
              <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
            </div>
          </div>
          <div class="relative group hidden md:flex justify-center items-center h-full w-full mt-4 md:mt-8 lg:hidden">
            <img
              class="object-center object-cover h-full w-full hidden md:block"
              src="https://i.ibb.co/6FjW19n/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2.png"
              alt="girl-image"
            />
            <img
              class="object-center object-cover h-full w-full sm:hidden"
              src="https://i.ibb.co/sQgHwHn/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png"
              alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2"
            />
            <button class="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
              Accessories
            </button>
            <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
