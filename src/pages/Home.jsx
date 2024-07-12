import React from "react";
import Banner from "../components/Banner/Banner";

import UkcharDhamYatra from "../components/Feature/UkcharDhamYatra/UkcharDhamYatra";
import AllIndiaCharDhamYatra from "../components/Feature/AllIndiaCharDhamYatra/AllIndiaCharDhamYatra";
import TrekDeatils from "../components/Feature/TrekDeatils/TrekDeatils";

const Home = () => {
  return (
    <div>
      <Banner />
      <AllIndiaCharDhamYatra />
      <UkcharDhamYatra />
      <TrekDeatils />
    </div>
  );
};

export default Home;
