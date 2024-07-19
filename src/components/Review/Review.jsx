// import React from "react";

// const Review = () => {
//   return (
//     <>
// <section class="py-24 relative ">
//   <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
//     <h2 class="font-manrope font-bold text-4xl text-black text-center mb-11">
//       Reviews
//     </h2>

//     <div class="grid grid-cols-1 gap-8 sm:justify-center">
//       <div class="pb-8 border-b border-gray-100 w-full"></div>

//       <div class="grid grid-cols-12 max-w-sm sm:max-w-full mx-auto sm:items-center">
//         <div class="col-span-12 lg:col-span-10 ">
//           <div class="sm:flex gap-6">
//             <img
//               src="https://pagedone.io/asset/uploads/1704364533.png"
//               alt="Robert image"
//               class="w-32 h-32"
//             />
//             <div class="text">
//               <p class="font-medium text-lg leading-8 text-gray-900 mb-2">
//                 Robert Karmazov
//               </p>
//               <div class="flex lg:hidden items-center gap-2 lg:justify-between w-full mb-5">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="30"
//                   height="30"
//                   viewBox="0 0 30 30"
//                   fill="none"
//                 >
//                   <g clip-path="url(#clip0_13624_2090)">
//                     <path
//                       d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
//                       fill="#FBBF24"
//                     />
//                   </g>
//                   <defs>
//                     <clipPath id="clip0_13624_2090">
//                       <rect width="30" height="30" fill="white" />
//                     </clipPath>
//                   </defs>
//                 </svg>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="30"
//                   height="30"
//                   viewBox="0 0 30 30"
//                   fill="none"
//                 >
//                   <g clip-path="url(#clip0_13624_2090)">
//                     <path
//                       d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
//                       fill="#FBBF24"
//                     />
//                   </g>
//                   <defs>
//                     <clipPath id="clip0_13624_2090">
//                       <rect width="30" height="30" fill="white" />
//                     </clipPath>
//                   </defs>
//                 </svg>

//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="30"
//                   height="30"
//                   viewBox="0 0 30 30"
//                   fill="none"
//                 >
//                   <g clip-path="url(#clip0_13624_2090)">
//                     <path
//                       d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
//                       fill="#FBBF24"
//                     />
//                   </g>
//                   <defs>
//                     <clipPath id="clip0_13624_2090">
//                       <rect width="30" height="30" fill="white" />
//                     </clipPath>
//                   </defs>
//                 </svg>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="30"
//                   height="30"
//                   viewBox="0 0 30 30"
//                   fill="none"
//                 >
//                   <g clip-path="url(#clip0_13624_2090)">
//                     <path
//                       d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
//                       fill="#FBBF24"
//                     />
//                   </g>
//                   <defs>
//                     <clipPath id="clip0_13624_2090">
//                       <rect width="30" height="30" fill="white" />
//                     </clipPath>
//                   </defs>
//                 </svg>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="30"
//                   height="30"
//                   viewBox="0 0 30 30"
//                   fill="none"
//                 >
//                   <g clip-path="url(#clip0_13624_2090)">
//                     <path
//                       d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
//                       fill="#FBBF24"
//                     />
//                   </g>
//                   <defs>
//                     <clipPath id="clip0_13624_2090">
//                       <rect width="30" height="30" fill="white" />
//                     </clipPath>
//                   </defs>
//                 </svg>
//               </div>
//               <p class="font-normal text-base leading-7 text-gray-400 mb-4 lg:pr-8">
//                 Pagedone excels in addressing the demand for responsive
//                 design. Its features ensure that designs not only look
//                 great on desktop but also seamlessly adapt to various
//                 screen sizes, providing a consistent user experience
//                 across devices.
//               </p>
//               <div class="flex items-center justify-between">
//                 <div class="flex items-center gap-2">
//                   <a
//                     href="javascript:;"
//                     class="font-semibold text-lg cursor-pointer leading-8 text-indigo-600 whitespace-nowrap"
//                   >
//                     Write Your Review
//                   </a>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="22"
//                     height="22"
//                     viewBox="0 0 22 22"
//                     fill="none"
//                   >
//                     <path
//                       d="M8.25324 5.49609L13.7535 10.9963L8.25 16.4998"
//                       stroke="#4F46E5"
//                       stroke-width="1.6"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                   </svg>
//                 </div>
//                 <p class="lg:hidden font-medium text-sm leading-7 text-gray-400 lg:text-center whitespace-nowrap">
//                   Nov 01, 2023
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div class="col-span-12 lg:col-span-2 max-lg:hidden flex lg:items-center flex-row lg:flex-col justify-center max-lg:pt-6 ">
//           <div class="flex items-center gap-2 lg:justify-between w-full mb-5">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="30"
//               height="30"
//               viewBox="0 0 30 30"
//               fill="none"
//             >
//               <g clip-path="url(#clip0_13624_2090)">
//                 <path
//                   d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
//                   fill="#FBBF24"
//                 />
//               </g>
//               <defs>
//                 <clipPath id="clip0_13624_2090">
//                   <rect width="30" height="30" fill="white" />
//                 </clipPath>
//               </defs>
//             </svg>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="30"
//               height="30"
//               viewBox="0 0 30 30"
//               fill="none"
//             >
//               <g clip-path="url(#clip0_13624_2090)">
//                 <path
//                   d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
//                   fill="#FBBF24"
//                 />
//               </g>
//               <defs>
//                 <clipPath id="clip0_13624_2090">
//                   <rect width="30" height="30" fill="white" />
//                 </clipPath>
//               </defs>
//             </svg>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="30"
//               height="30"
//               viewBox="0 0 30 30"
//               fill="none"
//             >
//               <g clip-path="url(#clip0_13624_2090)">
//                 <path
//                   d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
//                   fill="#FBBF24"
//                 />
//               </g>
//               <defs>
//                 <clipPath id="clip0_13624_2090">
//                   <rect width="30" height="30" fill="white" />
//                 </clipPath>
//               </defs>
//             </svg>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="30"
//               height="30"
//               viewBox="0 0 30 30"
//               fill="none"
//             >
//               <g clip-path="url(#clip0_13624_2090)">
//                 <path
//                   d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
//                   fill="#FBBF24"
//                 />
//               </g>
//               <defs>
//                 <clipPath id="clip0_13624_2090">
//                   <rect width="30" height="30" fill="white" />
//                 </clipPath>
//               </defs>
//             </svg>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="30"
//               height="30"
//               viewBox="0 0 30 30"
//               fill="none"
//             >
//               <g clip-path="url(#clip0_13624_2090)">
//                 <path
//                   d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
//                   fill="#FBBF24"
//                 />
//               </g>
//               <defs>
//                 <clipPath id="clip0_13624_2090">
//                   <rect width="30" height="30" fill="white" />
//                 </clipPath>
//               </defs>
//             </svg>
//           </div>
//           <p class="font-medium text-lg leading-8 text-gray-400 lg:text-center whitespace-nowrap">
//             Nov 01, 2023
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

//       <section>
//         <div class="px-4 py-5 sm:px-6 max-w-4xl mx-auto border rounded">
//           <h2 class="text-lg font-semibold leading-6 text-gray-900">
//             Submit Your Review
//           </h2>
//           <form class="mt-6 space-y-6">
//             <div>
//               <label
//                 for="username"
//                 class="block text-sm font-medium text-gray-700"
//               >
//                 Username
//               </label>
//               <input
//                 type="text"
//                 id="username"
//                 name="username"
//                 placeholder="Enter your username"
//                 class="mt-1 block w-full py-3 border-gray-300 rounded-md shadow-sm focus:ring-opacity-50"
//               />
//             </div>
//             <div>
//               <label
//                 for="email"
//                 class="block text-sm font-medium text-gray-700"
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 class="mt-1 block py-3 w-full border-gray-300 rounded-md shadow-sm  focus:ring-opacity-50"
//               />
//             </div>
//             <div>
//               <label
//                 for="review"
//                 class="block text-sm font-medium text-gray-700"
//               >
//                 Review Message
//               </label>
//               <textarea
//                 id="review"
//                 name="review"
//                 rows="3"
//                 placeholder="Write your review here..."
//                 class="mt-1 p-5 block w-full border-gray-300 rounded-md shadow-sm  focus:ring-opacity-50"
//               ></textarea>
//             </div>
//             <div class="flex items-center justify-end">
//               <button
//                 type="submit"
//                 class="inline-flex  bg-green-500 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white"
//               >
//                 Submit Review
//               </button>
//             </div>
//           </form>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Review;

import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Review = () => {
  const [showForm, setShowForm] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-full ">
      <div className="bg-blue-50 min-h-screen flex items-center justify-center p-6">
        <div className="bg-white shadow-md rounded p-6 max-w-6xl w-full">
          <section class="py-24 relative ">
            <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
              <h2 class="font-manrope font-bold text-4xl text-black text-center mb-11">
                Reviews
              </h2>

              <div class="grid grid-cols-1 gap-8 sm:justify-center">
                <div class="pb-8 border-b border-gray-100 w-full"></div>

                <div class="grid grid-cols-12 max-w-sm sm:max-w-full mx-auto sm:items-center">
                  <div class="col-span-12 lg:col-span-10 ">
                    <div class="sm:flex gap-6">
                      <img
                        src="https://pagedone.io/asset/uploads/1704364533.png"
                        alt="Robert image"
                        class="w-32 h-32"
                      />
                      <div class="text">
                        <p class="font-medium text-lg leading-8 text-gray-900 mb-2">
                          Robert Karmazov
                        </p>
                        <div class="flex lg:hidden items-center gap-2 lg:justify-between w-full mb-5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                          >
                            <g clip-path="url(#clip0_13624_2090)">
                              <path
                                d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                fill="#FBBF24"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_13624_2090">
                                <rect width="30" height="30" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                          >
                            <g clip-path="url(#clip0_13624_2090)">
                              <path
                                d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                fill="#FBBF24"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_13624_2090">
                                <rect width="30" height="30" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                          >
                            <g clip-path="url(#clip0_13624_2090)">
                              <path
                                d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                fill="#FBBF24"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_13624_2090">
                                <rect width="30" height="30" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                          >
                            <g clip-path="url(#clip0_13624_2090)">
                              <path
                                d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                fill="#FBBF24"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_13624_2090">
                                <rect width="30" height="30" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                          >
                            <g clip-path="url(#clip0_13624_2090)">
                              <path
                                d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                fill="#FBBF24"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_13624_2090">
                                <rect width="30" height="30" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <p class="font-normal text-base leading-7 text-gray-400 mb-4 lg:pr-8">
                          Pagedone excels in addressing the demand for
                          responsive design. Its features ensure that designs
                          not only look great on desktop but also seamlessly
                          adapt to various screen sizes, providing a consistent
                          user experience across devices.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="col-span-12 lg:col-span-2 max-lg:hidden flex lg:items-center flex-row lg:flex-col justify-center max-lg:pt-6 ">
                    <div class="flex items-center gap-2 lg:justify-between w-full mb-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_13624_2090)">
                          <path
                            d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                            fill="#FBBF24"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_13624_2090">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_13624_2090)">
                          <path
                            d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                            fill="#FBBF24"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_13624_2090">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_13624_2090)">
                          <path
                            d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                            fill="#FBBF24"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_13624_2090">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_13624_2090)">
                          <path
                            d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                            fill="#FBBF24"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_13624_2090">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_13624_2090)">
                          <path
                            d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                            fill="#FBBF24"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_13624_2090">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <p class="font-medium text-lg leading-8 text-gray-400 lg:text-center whitespace-nowrap">
                      Nov 01, 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <button
                onClick={() => setShowForm(!showForm)}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300 mb-4"
              >
                Click here to write a review
              </button>
            </div>
            <p class="lg:hidden font-medium text-sm leading-7 text-gray-400 lg:text-center whitespace-nowrap">
              Nov 01, 2023
            </p>
          </div>

          {showForm && (
            <section>
              <div className="px-4 py-5 sm:px-6 border rounded">
                <h2 className="text-lg font-semibold leading-6 text-gray-900">
                  Submit Your Review
                </h2>
                <form
                  className="mt-6 space-y-6"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div>
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      placeholder="Enter your username"
                      {...register("username", {
                        required: "Username is required",
                      })}
                      className="mt-1 block w-full py-3 border-gray-300 rounded-md shadow-sm focus:ring-opacity-50"
                    />
                    {errors.username && (
                      <p className="text-red-500 text-sm">
                        {errors.username.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      {...register("email", { required: "Email is required" })}
                      className="mt-1 block py-3 w-full border-gray-300 rounded-md shadow-sm focus:ring-opacity-50"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="review"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Review Message
                    </label>
                    <textarea
                      id="review"
                      rows="3"
                      placeholder="Write your review here..."
                      {...register("review", {
                        required: "Review message is required",
                      })}
                      className="mt-1 p-5 block w-full border-gray-300 rounded-md shadow-sm focus:ring-opacity-50"
                    ></textarea>
                    {errors.review && (
                      <p className="text-red-500 text-sm">
                        {errors.review.message}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center justify-end">
                    <button
                      type="submit"
                      className="inline-flex bg-green-500 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white"
                    >
                      Submit Review
                    </button>
                  </div>
                </form>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Review;
