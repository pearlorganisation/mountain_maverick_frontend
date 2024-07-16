import React from "react";

const About = () => {
  return (
    <>
      <div className=" font-sans leading-relaxed tracking-wide flex flex-col max-w-7xl mx-auto">
        <main class="flex-grow container mx-auto p-6">
          <section class="text-center mb-12">
            <h2 class="text-4xl font-semibold mb-4">About Us</h2>
            <p class="text-lg text-gray-700">
              Discover the passion and people behind Trek Explorer.
            </p>
          </section>

          <section class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div class="space-y-4">
              <h3 class="text-3xl font-semibold text-gray-800">Our Mission</h3>
              <p class="text-gray-700 leading-loose">
                At Trek Explorer, our mission is to provide unforgettable
                trekking experiences by showcasing the most beautiful trails and
                peaks around the world. We aim to inspire and motivate people to
                connect with nature and discover the thrill of outdoor
                adventures.
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

          <section class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
            <div>
              <img
                src="https://thelearningrooms.com/wps/wp-content/uploads/2015/02/team.jpg"
                alt="Team"
                class="rounded-lg shadow-lg"
              />
            </div>
            <div class="space-y-4">
              <h3 class="text-3xl font-semibold text-gray-800">Our Team</h3>
              <p class="text-gray-700 leading-loose">
                Our team is made up of experienced trekkers and adventure
                enthusiasts who are dedicated to making your trekking experience
                safe, enjoyable, and memorable. From expert guides to support
                staff, we work together to ensure every detail of your trek is
                taken care of.
              </p>
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
              href="#"
              class="inline-block bg-green-500 text-white py-3 px-6 rounded-md shadow-md hover:bg-green-600 transition duration-300"
            >
              Contact Us
            </a>
          </section>
        </main>
      </div>
    </>
  );
};

export default About;
