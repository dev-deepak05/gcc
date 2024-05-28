import React from "react";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Body from "./components/Body";
import Move from "./components/Move";
import Marquee from "react-fast-marquee";
import { Card } from "@mui/material";
import ConnectWallet from "./components/ConnectWallet";
import Presale from "./components/Presale";
import Piechart from "./components/Piechart";
import Roadmap from "./components/Roadmap";
import Community from "./components/Community";
import Questions from "./components/Questions";
import Footer from "./components/Footer";

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
      <Roadmap />
      <Community />
      <Questions />
      <Footer />
    </>
  );
}

export default App;
