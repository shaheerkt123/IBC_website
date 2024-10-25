import React from "react";
import { Header } from "../components/home/header";
import { Slider } from "../components/home/slider";
import { Services } from "../components/home/services";
import { Team } from "../components/home/team";
import { News } from "../components/home/news";
import { Footer } from "../components/home/footer";

export const HomeScreen = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="min-h-screen flex flex-col">
        <Slider />
        <Services />
        <Team />
        <News />
      </main>
      <Footer />
    </div>
  );
};
