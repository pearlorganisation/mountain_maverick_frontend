import { Scroll } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";

const Contactus = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <>
      <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen border">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <div className="w-full text-center py-5">
            <h1 className="text-2xl font-medium">Contact Us</h1>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>
            <div className="flex space-x-2">
              <span className="flex items-center px-4 py-2 border rounded-l-md bg-gray-100">
                +91
              </span>
              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-4 py-2 border rounded-r-md focus:outline-none focus:ring-2 focus:ring-green-500"
                {...register("phone", { required: "Phone number is required" })}
              />
              {errors.phone && (
                <span className="text-red-500">{errors.phone.message}</span>
              )}
            </div>
            <div>
              <input
                type="date"
                placeholder="Choose Date of Travel"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                {...register("date", { required: "Date is required" })}
              />
              {errors.date && (
                <span className="text-red-500">{errors.date.message}</span>
              )}
            </div>
            <div>
              <input
                type="number"
                placeholder="Traveller Count"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                {...register("travellerCount", {
                  required: "Traveller count is required",
                })}
              />
              {errors.travellerCount && (
                <span className="text-red-500">
                  {errors.travellerCount.message}
                </span>
              )}
            </div>
            <div>
              <textarea
                placeholder="Message"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                {...register("message", { required: "Message is required" })}
              ></textarea>
              {errors.message && (
                <span className="text-red-500">{errors.message.message}</span>
              )}
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-[#22C55E] text-white py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
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
