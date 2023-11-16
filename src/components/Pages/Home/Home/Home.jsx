import React from "react";
import AppService from "../AppService/AppService";
import Banner from "../Banner/Banner";
import Helpline from "../helpLine/Helpline";
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
      <AppService></AppService>
      <Helpline></Helpline>
    </div>
  );
};

export default Home;
