import React from "react";

const Contactus = () => {
  return (
    <>
      <div class="bg-gray-100 flex items-center justify-center min-h-screen">
        <div class="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <form class="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div class="flex space-x-2">
              <span class="flex items-center px-4 py-2 border rounded-l-md bg-gray-100">
                +91
              </span>
              <input
                type="tel"
                placeholder="Phone"
                class="w-full px-4 py-2 border rounded-r-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <input
                type="date"
                placeholder="Choose Date of Travel"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Traveller Count"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
            </div>
            <div class="flex items-start space-x-2 text-sm text-gray-600">
              <span class="text-green-600">✔</span>
              <p>We assure the privacy of your contact data.</p>
            </div>
            <div class="flex items-start space-x-2 text-sm text-gray-600">
              <span class="text-green-600">✔</span>
              <p>
                This data will only be used by our team to contact you and no
                other purposes.
              </p>
            </div>
            <div>
              <button
                type="submit"
                class="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Send Enquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contactus;
