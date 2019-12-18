import React from "react";
import PercentageChange from "./PercentageChange";
import Thesaurus from "./Thesaurus";
import Flexbox from "flexbox-react";

function App() {
  return (
    <Flexbox flexDirection="row">
      <PercentageChange></PercentageChange>
      <Thesaurus></Thesaurus>
    </Flexbox>
  );
}

export default App;
