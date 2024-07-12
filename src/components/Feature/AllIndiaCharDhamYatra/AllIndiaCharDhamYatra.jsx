import React from "react";

const AllIndiaCharDhamYatra = () => {
  return (
    <>
      <body class="bg-gray-100">
        <h1 className="text-center text-xl md:text-3xl font-medium p-5 md:p-10">
          All India char dham yatra{" "}
        </h1>
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://www.mypuritour.com/wp-content/uploads/2022/08/puri-tour-2022.jpeg"
                alt="Jagannath Puri"
                class="w-full h-56 object-cover object-center"
              />
              <div class="p-4">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">
                  Jagannath Puri
                </h3>
                <p class="text-gray-600">
                  The Jagannath Temple is a Hindu temple dedicated to the god
                  Jagannath, a form of Vishnu in Hinduism.
                </p>
              </div>
            </div>

            <div class="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://www.justahotels.com/wp-content/uploads/2024/02/Ramanathaswamy-Temple.jpg"
                alt="Gangotri"
                class="w-full h-56 object-cover object-center"
              />
              <div class="p-4">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">
                  Rameswaram
                </h3>
                <p class="text-gray-600">
                  The shrine is dedicated to Lord Shiva and is one of the twelve
                  jyotirlinga temples in India.
                </p>
              </div>
            </div>

            <div class="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://khojoindia.org/uploads/images/202304/image_870x_642bf75ac4867.jpg"
                alt="Kedarnath"
                class="w-full h-56 object-cover object-center"
              />
              <div class="p-4">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">Dwarka</h3>
                <p class="text-gray-600">
                  Dwarakadheesh is the 98th Divya Desam of Vishnu on the
                  subcontinent, glorified in the Divya Prabandha sacred texts.
                </p>
              </div>
            </div>

            <div class="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="badrinath.jpg"
                alt="Badrinath"
                class="w-full h-56 object-cover object-center"
              />
              <div class="p-4">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">
                  Badrinath
                </h3>
                <p class="text-gray-600">
                  Badrinath, a major pilgrimage center dedicated to Lord Vishnu,
                  is located in the Garhwal hills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default AllIndiaCharDhamYatra;
