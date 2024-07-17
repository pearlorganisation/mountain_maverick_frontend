import Banner from "../../components/Banner/Banner";
import UkcharDhamYatra from "../../components/Feature/UkcharDhamYatra/UkcharDhamYatra";

const Home = () => {
  return (
    <div>
      <Banner />

      <div className="container mx-auto">
        <h1 className="text-center text-green-500 font-bold text-5xl py-6">
          MOST POPULAR UTTARAKHAND DESTINATIONS
        </h1>
        <UkcharDhamYatra />
      </div>
    </div>
  );
};

export default Home;
