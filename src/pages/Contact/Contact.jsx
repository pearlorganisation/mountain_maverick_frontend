const Contact = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen border">
        <div className="w-full text-center bg-gray-100 py-5">
          <h1 className="text-2xl font-medium">Contact Us</h1>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="flex space-x-2">
              <span className="flex items-center px-4 py-2 border rounded-l-md bg-gray-100">
                +91
              </span>
              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-4 py-2 border rounded-r-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <input
                type="date"
                placeholder="Choose Date of Travel"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Traveller Count"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-[#22C55E] text-white py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
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

export default Contact;
