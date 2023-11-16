import React from "react";
import Banner from "../Banner/Banner";
import Recommanded from "../recommanded/recommanded";
import Services from "../Services/Services";
import Trending from "../Tranding/Trending";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Recommanded></Recommanded>
      <Services></Services>
      <Trending></Trending>
    </div>
  );
};

export default Home;
