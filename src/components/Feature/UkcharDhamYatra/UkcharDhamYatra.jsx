import React from "react";

const UkcharDhamYatra = () => {
  return (
    <>
      <div className="bg-gray-100">
        <h1 className="text-center text-xl md:text-3xl font-medium p-5 md:p-10">
          Uttarakhand char dham yatra{" "}
        </h1>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="yamunotri.jpg"
                alt="Yamunotri"
                className="w-full h-56 object-cover object-center"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Yamunotri
                </h3>
                <p className="text-gray-600">
                  Yamunotri, the source of river Yamuna, is revered by Hindu
                  pilgrims seeking purification.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="gangotri.jpg"
                alt="Gangotri"
                className="w-full h-56 object-cover object-center"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Gangotri
                </h3>
                <p className="text-gray-600">
                  Gangotri, the origin of the river Ganges, is a significant
                  pilgrimage site for Hindus.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="kedarnath.jpg"
                alt="Kedarnath"
                className="w-full h-56 object-cover object-center"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  kedarnath
                </h3>
                <p className="text-gray-600">
                  Kedarnath, dedicated to Lord Shiva, is one of the twelve
                  Jyotirlingas and a key pilgrimage site.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="badrinath.jpg"
                alt="Badrinath"
                className="w-full h-56 object-cover object-center"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Badrinath
                </h3>
                <p className="text-gray-600">
                  Badrinath, a major pilgrimage center dedicated to Lord Vishnu,
                  is located in the Garhwal hills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UkcharDhamYatra;
