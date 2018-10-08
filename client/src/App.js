import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Quiz from "./pages/Quiz";
// import logo from "./logo.svg";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Quiz} />
    </Switch>
  </BrowserRouter>
);

export default App;
