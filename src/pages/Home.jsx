import Banner from "../components/Banner/Banner";
import CharDhamYatra from "../components/AllTreks/CharDhamYatra/CharDhamYatra";
import PopularTrek from "../components/AllTreks/PopularTrek/PopularTrek";

const Home = () => {
  return (
    <div>
      <Banner />
      <CharDhamYatra />
      <PopularTrek />
    </div>
  );
};

export default Home;
