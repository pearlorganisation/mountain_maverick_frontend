import React from "react";
import Banner from "../components/Banner/Banner";
import CharDhamYatra from "../components/AllTreks/CharDhamYatra/CharDhamYatra";
import PopularTrek from "../components/AllTreks/PopularTrek/PopularTrek";
import TrekDeatils from "../components/AllTreks/TrekDeatils/TrekDeatils";
import Review from "../components/Review/Review";

const Home = () => {
  return (
    <div>
      <Banner />
      <CharDhamYatra />
      <PopularTrek />
      <Review />
    </div>
  );
};

export default Home;
