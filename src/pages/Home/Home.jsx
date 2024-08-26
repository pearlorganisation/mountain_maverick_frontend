import Banner from "../../components/Banner/Banner";
import CharDhamYatra from "../../components/AllTreks/CharDhamYatra/CharDhamYatra";
import PopularTrek from "../../components/AllTreks/PopularTrek/PopularTrek";
import { Element } from "react-scroll";
import Tour from "../../components/AllTreks/Tours/Tour";

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

      {/* <Tour /> */}
    </div>
  );
};

export default Home;
