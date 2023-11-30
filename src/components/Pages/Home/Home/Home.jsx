import React from "react";
import AllService from "../AllService/AllService";
import AppService from "../AppService/AppService";
import Banner from "../Banner/Banner";
import Benefits from "../Benefits/Benefits";
import Helpline from "../helpLine/Helpline";
import RecentlyView from "../RecentlyView/RecentlyView";
import Recommanded from "../recommanded/recommanded";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";
import ServiceWorkflow from "../ServiceWorkflow/ServiceWorkflow";
import Trending from "../Tranding/Trending";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AllService></AllService>
      <Services></Services>
      <RecentlyView></RecentlyView>
      <Recommanded></Recommanded>
      <Services></Services>
      <Trending></Trending>
      <Benefits></Benefits>
      <ServiceWorkflow></ServiceWorkflow>
      <Reviews></Reviews>
      <AppService></AppService>
      <Helpline></Helpline>
    </div>
  );
};

export default Home;
