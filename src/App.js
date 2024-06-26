import React from "react";
import { Toaster } from "react-hot-toast";
// import Header from "./components/Header";
import Body from "./components/Body";
import Move from "./components/Move";
import Marquee from "react-fast-marquee";
import Card from "./components/Card";
import ConnectWallet from "./components/ConnectWallet";
import Presale from "./components/Presale";
import Piechart from "./components/Piechart";
import Roadmap from "./components/Roadmap";
import Community from "./components/Community";
import Questions from "./components/Questions";
import Footer from "./components/Footer";
import RewardDistribution from "./components/RewardDistribution";
// comment
function App() {
  return (
    <>
      <Toaster />
    
      <Body />
      <Marquee direction="right" speed={100}>
        <Move />
      </Marquee>
      <Card />
      <ConnectWallet />
      <Presale />
      <Piechart />
      <RewardDistribution/>
      <Roadmap />
      <Community />
      <Questions />
      <Footer />
    </>
  );
}

export default App;
