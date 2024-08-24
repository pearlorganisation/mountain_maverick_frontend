const About = () => {
  return <div className=" font-sans leading-relaxed tracking-wide flex flex-col max-w-7xl mx-auto">
    <main class="flex-grow container mx-auto p-6">
      <section class="text-center mb-12">
        <h2 class="text-4xl font-semibold mb-4">About Us</h2>
        <p class="text-lg text-gray-700">
          Mountain Mavericks Trekking Soul represent a group, community, or mindset characterized by an adventurous and independent spirit, particularly focused on the soul-enriching experiences of trekking in mountainous landscapes. It encapsulates a love for exploration, a non-traditional approach to trekking, and a deep connection to the spiritual aspects of the journey.
        </p>
      </section>
      <section class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
        <div>
          <img
            src="https://images.unsplash.com/photo-1715757534016-81ecb3b50a28?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Team"
            class="rounded-lg shadow-lg"
          />
        </div>
        <div class="space-y-4">
          <h3 class="text-3xl font-semibold text-gray-800">Our Story</h3>
          <p class="text-gray-700 leading-loose">


            Mountain Mavericks Trekking Soul is a group of avid trekkers who found solace, joy, and a deep connection with nature through the trails less traveled. We embarked on this journey to share our experiences, insights, and a wealth of information about trekking destinations.
          </p>
        </div>
      </section>

      <section class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div class="space-y-4">
          <h3 class="text-3xl font-semibold text-gray-800">Our Mission</h3>
          <p class="text-gray-700 leading-loose">
            At Mountain Mavericks Trekking Soul our mission is to inspire and empower individuals to embrace the spirit of adventure, explore the wonders of the great outdoors, and foster a deeper appreciation for the environment. We aim to be your go-to resource for all things trekking, from planning your first trek to discovering hidden gems off the beaten path.Whether you're a seasoned trekker or a novice explorer, join us in celebrating the thrill of the trek and the beauty of nature. Let Mountain Mavericks Trekking Soul be your companion on your next great adventure.Thank you for being part of our trekking community!
          </p>
        </div>
        <div>
          <img
            src="banner2.jpg"
            alt="Trekking"
            class="rounded-lg shadow-lg"
          />
        </div>
      </section>



      <section class="text-center mt-12">
        <h3 class="text-3xl font-semibold text-gray-800 mb-4">Join Us</h3>
        <p class="text-gray-700 leading-loose mb-6">
          Become a part of our trekking community and embark on your next
          adventure with Trek Explorer. Whether you're a seasoned trekker or
          a beginner, we have something for everyone.
        </p>

        <a
          href="/Contact"
          class="inline-block bg-green-500 text-white py-3 px-6 rounded-md shadow-md hover:bg-green-600 transition duration-300"
        >
          Contact Us
        </a>
      </section>
    </main>
  </div>;
};

export default About;
