import React from "react";
import Banner from "../components/Banner/Banner";

import TrekDeatils from "../components/Feature/TrekDeatils/TrekDeatils";
import CharDhamYatra from "../components/Feature/CharDhamYatra/CharDhamYatra";
import PopularTrek from "../components/Feature/PopularTrek/PopularTrek";

const Home = () => {
  return (
    <div>
      <Banner />
      <CharDhamYatra />
      <PopularTrek />
      <TrekDeatils />
    </div>
  );
};

export default Home;
