import React from "react"
import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import { css } from "styled-components/macro";

import HomePage from "pages/HomePage.js";

import ComponentRenderer from "ComponentRenderer.js";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HomePage/>
    </div>
  );
}

export default App;
