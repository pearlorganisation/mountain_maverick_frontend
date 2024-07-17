import React from "react";

const TrekDeatils = () => {
  return (
    <>
      <div class="p-8 bg-white shadow-md rounded-lg max-w-6xl mx-auto">
        <div class="flex flex-col items-center">
          <img
            src="https://www.mypuritour.com/wp-content/uploads/2022/08/puri-tour-2022.jpeg"
            alt="Jagannath Puri Photo"
            class="w-full h-96 object-cover rounded-lg mb-4 object-center"
          />
          <h2 class="text-2xl font-bold text-gray-800">Jagannath Puri</h2>
        </div>

        <div class="mt-6">
          <h3 class="text-xl font-semibold text-gray-700">Description</h3>
          <p class="text-gray-600 mt-2">
            Jagannath Puri, located in the state of Odisha, is one of the most
            sacred pilgrimage sites in India. The temple is dedicated to Lord
            Jagannath, an incarnation of Lord Vishnu. Known for its annual Rath
            Yatra festival, where the deities are taken out in a grand
            procession, Jagannath Puri attracts millions of devotees from around
            the world.
          </p>
        </div>

        <div class="mt-6">
          <h3 class="text-xl font-semibold text-gray-700">Itinerary</h3>
          <ul class="list-disc list-inside text-gray-600 mt-2">
            <li>
              Day 1: Arrival in Puri, check-in to the hotel, and evening visit
              to the Jagannath Temple for darshan.
            </li>
            <li>
              Day 2: Visit to the Gundicha Temple, Narendra Tank, and enjoy the
              beach at Puri.
            </li>
            <li>
              Day 3: Excursion to Chilika Lake, Asia's largest brackish water
              lagoon, and visit Satapada to spot Irrawaddy dolphins.
            </li>
            <li>
              Day 4: Local sightseeing including the Sun Temple at Konark,
              Ramachandi Temple, and Chandrabhaga Beach. Departure in the
              evening.
            </li>
          </ul>
        </div>

        <div class="mt-6 flex space-x-4">
          <div class="w-1/2">
            <h3 class="text-xl font-semibold text-gray-700">Dos</h3>
            <ul class="list-disc list-inside text-gray-600 mt-2">
              <li>Respect the temple customs and dress modestly.</li>
              <li>
                Participate in the Rath Yatra festival if possible, but follow
                all safety guidelines.
              </li>
              <li>Try the famous Jagannath Temple Mahaprasad (sacred food).</li>
              <li>Keep your belongings safe while visiting crowded places.</li>
            </ul>
          </div>
          <div class="w-1/2">
            <h3 class="text-xl font-semibold text-gray-700">Don'ts</h3>
            <ul class="list-disc list-inside text-gray-600 mt-2">
              <li>
                Do not carry any leather items inside the temple premises.
              </li>
              <li>Avoid taking photographs inside the temple.</li>
              <li>Do not enter restricted areas within the temple complex.</li>
              <li>Refrain from littering and keep the surroundings clean.</li>
            </ul>
          </div>
        </div>

        <div class="mt-6">
          <h3 class="text-xl font-semibold text-gray-700">Price</h3>
          <p class="text-gray-600 mt-2">
            The cost of the Jagannath Puri yatra can vary depending on the
            package chosen. On average, a 4-day tour package including
            accommodation, meals, and local sightseeing can range from ₹8,000 to
            ₹15,000 per person.
          </p>
        </div>

        <div class="mt-6 ">
          <h3 class="text-xl font-semibold text-gray-700">Image Gallery</h3>
          <div class="grid grid-cols-2 gap-4 mt-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJqkPA54NjTmY-FPlyOAjnlIyORpziubzCWw&s"
              alt="Jagannath Temple"
              class="w-full h-50 object-cover rounded-lg"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr07l6mDpVKUxdHw2aqgXoFbk50JoQFBo6Ww&s"
              alt="Rath Yatra"
              class="w-full h-50  object-cover rounded-lg"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQvHcJuT6VvxX-KSQcNy8c3obAOiY2i9-rqg&s"
              alt="Sun Temple, Konark"
              class="w-full h-50  object-cover rounded-lg"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQvHcJuT6VvxX-KSQcNy8c3obAOiY2i9-rqg&s"
              alt="Chilika Lake"
              class="w-full h-50  object-cover rounded-lg"
            />
          </div>
        </div>

        <div class="mt-6">
          <h3 class="text-xl font-semibold text-gray-700">
            Best Time to Visit
          </h3>
          <p class="text-gray-600 mt-2">
            The best time to visit Jagannath Puri is during the winter months
            from October to February when the weather is pleasant. The Rath
            Yatra festival, usually held in June or July, is also a great time
            to visit to witness the grand procession and celebrations.
          </p>
        </div>
      </div>
    </>
  );
};

export default TrekDeatils;
