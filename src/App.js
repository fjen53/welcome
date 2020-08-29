import React, { Component } from "react";
import "./App.css";
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import Navigation from "./components/navigation/Navigation";
import { Route, Switch } from "react-router-dom";
import Jeopardy from "./components/jeopardy/Jeopardy";
import Display from "./components/display/Display";
import Error404 from "./components/error404/Error404";

function App() {
  return (
    <div className="App">
      <Navigation />

      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Welcome {...props} name="Jenny" />}
        />
        <Route
          exact
          path="/welcome/:name"
          render={(props) => (
            <Welcome {...props} name={props.match.params.name} />
          )}
        />
        <Route path="/clock" component={Clock} />
        <Route path="/contact" component={Contact} />
        <Route path="/jeopardy" component={Jeopardy} />
        <Route path="/display" component={Display} />
        <Route exact component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
