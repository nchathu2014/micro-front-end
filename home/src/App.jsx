import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./index.scss";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header title={"I am a Header"} />
    <div>
      <h2>Home App</h2>
    </div>
    <Footer title={"I am a Footer"} />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
