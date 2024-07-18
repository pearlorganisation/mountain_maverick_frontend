import Banner from "../components/Banner/Banner";
import CharDhamYatra from "../components/AllTreks/CharDhamYatra/CharDhamYatra";
import PopularTrek from "../components/AllTreks/PopularTrek/PopularTrek";
import { Element } from "react-scroll";

const Home = () => {
  return (
    <div>
      <Banner />
      <Element name="charDham" className="element">
        <CharDhamYatra />
      </Element>

      <Element name="trek" className="element">
        <PopularTrek />
      </Element>
    </div>
  );
};

export default Home;
