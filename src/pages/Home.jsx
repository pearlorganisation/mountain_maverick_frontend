import React from "react";
import Banner from "../components/Banner/Banner";
import CharDhamYatra from "../components/AllTreks/CharDhamYatra/CharDhamYatra";
import PopularTrek from "../components/AllTreks/PopularTrek/PopularTrek";
import TrekDeatils from "../components/AllTreks/TrekDeatils/TrekDeatils";

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
