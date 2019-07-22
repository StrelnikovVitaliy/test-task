import React from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import CarouselContainer from "./components/CarouselContainer";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import classes from "./App.module.scss";

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <Menu />
      <CarouselContainer />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
