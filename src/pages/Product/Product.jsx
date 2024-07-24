import React from "react";

const Product = () => {
  return (
    <>
      <header
        style={{
          backgroundImage:
            "url(https://www.sacredyatra.com/wp-content/uploads/2016/01/Panch-Kedar-Yatra.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="text-white h-96 flex items-center justify-center"
      >
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Panch Kedar Trek</h1>
          <p className="mt-4 text-lg md:text-2xl">
            Embark on a Sacred Journey through the Himalayas
          </p>
        </div>
      </header>

      <section style={{ backgroundColor: "#f8f9fa" }} className="py-12">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center mb-6">Trek Overview</h2>
          <div className="md:flex md:justify-between">
            <div className="md:w-1/2">
              <p className="text-lg mb-4">
                The story of the Panch Kedar is deeply rooted in Hindu
                mythology, particularly related to Lord Shiva. The Panch Kedar
                refers to five Hindu temples dedicated to Lord Shiva, located in
                the Garhwal region of Uttarakhand, India. These temples are
                Kedarnath, Madhyamaheshwar, Tungnath, Rudranath, and Kalpeshwar.
              </p>
              <p className="text-lg mb-4">
                The Mahabharata Connection: The story of the Panch Kedar is
                linked to the Pandavas from the Mahabharata. After the
                Kurukshetra war, the Pandavas sought penance for killing their
                kin during the war. They were advised by sage Vyasa to seek the
                blessings of Lord Shiva to atone for their sins. However, Lord
                Shiva was not inclined to bless them because he was deeply angry
                over the destruction and death caused by the war.
              </p>
              <p className="text-lg mb-4">
                Shiva's Disguise: To avoid the Pandavas, Shiva disguised himself
                as a bull (Nandi) and hid in the Garhwal region. However, the
                Pandavas were relentless in their pursuit. Bhima, the second of
                the Pandava brothers, spotted the bull and recognized it as
                Shiva. Bhima tried to catch the bull, but it disappeared into
                the ground, leaving behind its hump.
              </p>
              <p className="text-lg mb-4">
                The Five Manifestations: This event led to the emergence of
                Shiva in five different forms across the region, which are now
                worshipped at the Panch Kedar temples:
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>
                  <strong>Kedarnath:</strong> The hump of the bull is worshipped
                  in Kedarnath.
                </li>
                <li>
                  <strong>Madhyamaheshwar:</strong> The navel and stomach
                  surfaced here.
                </li>
                <li>
                  <strong>Tungnath:</strong> The arms appeared here.
                </li>
                <li>
                  <strong>Rudranath:</strong> The face of the bull is worshipped
                  here.
                </li>
                <li>
                  <strong>Kalpeshwar:</strong> The hair and head appeared here.
                </li>
              </ul>
              <p className="text-lg mb-4">
                The pilgrimage to these temples is considered highly sacred, and
                it is believed that visiting these shrines brings immense
                spiritual merit and blessings from Lord Shiva.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://www.sacredyatra.com/wp-content/uploads/2016/01/Panch-Kedar-Yatra.jpg"
                alt="Panch Kedar"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center mb-6">The Temples</h2>
          <div className="md:grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <h3 className="text-2xl font-semibold mb-2">Kedarnath Temple</h3>
              <p className="text-lg mb-2">
                <strong>Altitude:</strong> 3,583 meters
              </p>
              <p className="text-lg mb-2">
                <strong>Details:</strong> The most important and second highest
                among the Panch Kedar. The temple is accessible only by
                trekking.
              </p>
              <p className="text-lg mb-2">
                <strong>Trekking Level:</strong> Moderate to challenging
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/56/Kedarnath_Temple_in_Rainy_season.jpg"
                alt="Kedarnath Temple"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <h3 className="text-2xl font-semibold mb-2">
                Madhyamaheshwar Temple
              </h3>
              <p className="text-lg mb-2">
                <strong>Altitude:</strong> 3,497 meters
              </p>
              <p className="text-lg mb-2">
                <strong>Details:</strong> Known for its serene and tranquil
                surroundings. Involves a Moderate to challenging trek.
              </p>
              <img
                src="https://gmvnonline.com/uploads/images/destinations/Rudraprayag/Madhamaheshwar/budha-madhyamaheshwar.jpg"
                alt="Madhyamaheshwar Temple"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <h3 className="text-2xl font-semibold mb-2">Tungnath Temple</h3>
              <p className="text-lg mb-2">
                <strong>Altitude:</strong> 3,680 meters
              </p>
              <p className="text-lg mb-2">
                <strong>Details:</strong> Known as the highest Shiva temple in
                the world. Accessible via a short trek from Chopta.
              </p>
              <img
                src="https://nextjs.shrineyatra.in/wp-content/uploads/2022/12/Tungnath-Temple.jpg"
                alt="Tungnath Temple"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <h3 className="text-2xl font-semibold mb-2">Rudranath Temple</h3>
              <p className="text-lg mb-2">
                <strong>Altitude:</strong> 2,286 meters
              </p>
              <p className="text-lg mb-2">
                <strong>Details:</strong> The face of Lord Shiva is worshipped
                here. Requires a strenuous trek through dense forests and
                meadows.
              </p>
              <p className="text-lg mb-2">
                <strong>Trekking Level:</strong> Moderate to challenging
              </p>
              <img
                src="https://www.bontravelindia.com/wp-content/uploads/2022/02/Shri-Rudranath-Temple.jpg"
                alt="Rudranath Temple"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <h3 className="text-2xl font-semibold mb-2">Kalpeshwar Temple</h3>
              <p className="text-lg mb-2">
                <strong>Altitude:</strong> 2,200 meters
              </p>
              <p className="text-lg mb-2">
                <strong>Details:</strong> The only Panch Kedar temple accessible
                throughout the year. The trek is relatively easier compared to
                others.
              </p>
              <img
                src="https://www.euttaranchal.com/tourism/photos/rudranath-3584027.jpg"
                alt="Kalpeshwar Temple"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center mb-6">
            Trek Itinerary
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <h3 className="text-2xl font-semibold mb-2">
                Day 1: Rishikesh to Gaurikund
              </h3>
              <p className="text-lg">
                Start early from Rishikesh and drive to Gaurikund (approx. 220
                km, 8-9 hours). Stay overnight in Gaurikund.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <h3 className="text-2xl font-semibold mb-2">
                Day 2: Gaurikund to Kedarnath
              </h3>
              <p className="text-lg">
                Start trekking from Gaurikund to Kedarnath (approx. 26 km).
                Reach Kedarnath by evening. Visit the Kedarnath Temple. Stay
                overnight in Kedarnath.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <h3 className="text-2xl font-semibold mb-2">
                Day 3: Kedarnath to Madhyamaheshwar
              </h3>
              <p className="text-lg">
                Trek from Kedarnath to Madhyamaheshwar (approx. 23 km). Visit
                Madhyamaheshwar Temple. Stay overnight at a guesthouse.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <h3 className="text-2xl font-semibold mb-2">
                Day 4: Madhyamaheshwar to Tungnath
              </h3>
              <p className="text-lg">
                Trek from Madhyamaheshwar to Tungnath (approx. 22 km). Visit
                Tungnath Temple. Stay overnight at Tungnath.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <h3 className="text-2xl font-semibold mb-2">
                Day 5: Tungnath to Rudranath
              </h3>
              <p className="text-lg">
                Trek from Tungnath to Rudranath (approx. 20 km). Visit Rudranath
                Temple. Stay overnight at Rudranath.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <h3 className="text-2xl font-semibold mb-2">
                Day 6: Rudranath to Kalpeshwar
              </h3>
              <p className="text-lg">
                Trek from Rudranath to Kalpeshwar (approx. 20 km). Visit
                Kalpeshwar Temple. Stay overnight at Kalpeshwar.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <h3 className="text-2xl font-semibold mb-2">
                Day 7: Kalpeshwar to Rishikesh
              </h3>
              <p className="text-lg">
                Drive back from Kalpeshwar to Rishikesh (approx. 220 km, 8-9
                hours). End of trek.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center mb-6">
            Dos and Don’ts
          </h2>
          <div className="md:flex md:justify-between">
            <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg mb-6">
              <h3 className="text-2xl font-semibold mb-4">Dos</h3>
              <ul className="list-disc list-inside mb-4">
                <li>Carry sufficient warm clothing and trekking gear.</li>
                <li>Stay hydrated and carry water purification tablets.</li>
                <li>Follow local guidelines and respect the environment.</li>
                <li>Acclimatize properly to avoid altitude sickness.</li>
              </ul>
            </div>
            <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg mb-6">
              <h3 className="text-2xl font-semibold mb-4">Don’ts</h3>
              <ul className="list-disc list-inside mb-4">
                <li>Do not litter or damage the natural surroundings.</li>
                <li>Avoid trekking alone or without proper guidance.</li>
                <li>Refrain from consuming alcohol or drugs.</li>
                <li>
                  Do not ignore weather warnings or trek in adverse conditions.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
