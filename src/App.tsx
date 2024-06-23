import React from "react";
import Navbar from "./component/Navbar";
import Hero from "component/Hero";
import HeadlineCards from "component/HeadlineCards";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <HeadlineCards />
    </div>
  );
}

export default App;
