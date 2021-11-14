import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom";
//import HeaderPDP from "home/Header";
//import FooterPDP from "home/Footer";
import "./index.scss";

const HeaderPDP = React.lazy(() => import("home/Header"));
const FooterPDP = React.lazy(() => import("home/Footer"));

const App = () => {
  const [isHeaderVisible, setHeaderVisible] = useState(false);

  return (
    <div className="text-3xl mx-auto max-w-6xl">
      <button onClick={() => setHeaderVisible(!isHeaderVisible)}>
        Toggle Header
      </button>
      {isHeaderVisible && (
        <Suspense fallback={<div>Loading...</div>}>
          <HeaderPDP title="PDP Header" />
        </Suspense>
      )}

      <div>Name: pdp</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Tailwind</div>
      <Suspense fallback={<div>Loading...</div>}>
        <FooterPDP title="PDP Footer" />
      </Suspense>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
