import React, { Fragment } from "react";
import { Navbar, Image, MainContainer } from "./components";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="App">
        <Image />
        <MainContainer />
      </div>
    </Fragment>
  );
};

export default App;
