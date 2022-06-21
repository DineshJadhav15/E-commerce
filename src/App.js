import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import BestSellerPage from "./components/bestSellerPage/BestSellerPage";
import HomeMainPage from "./components/homeMain/HomeMainPage";
import TrustedPartners from "./components/trustedParterners/TrustedPartners";
import Assurance from "./components/assurence/Assurance";
import StoryPage from "./components/storyPage/StoryPage";
import Testimonials from "./components/tetimonials/Testimonials";

function App() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "0",
          width: "100%",
          height: "12%",
          zIndex: "2",
          background: "white",
        }}
      >
        <Header />
      </div>
      <div
        style={{
          padding: "1%",
          margin: "1%",
          height: "100vh",
          marginTop: "10%",
        }}
      >
        <HomeMainPage />
      </div>
      <TrustedPartners />
      <BestSellerPage />
      <Assurance />
      <StoryPage />
      <Testimonials />
    </>
  );
}

export default App;
