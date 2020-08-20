import React, { Component } from "react";
import "./App.css";
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import Navigation from "./components/navigation/Navigation";
import { Route, Switch } from "react-router-dom";
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

        <Route path="/clock" component={Clock} />

        <Route path="/contact" component={Contact} />

        <Route exact component={Error404}></Route>

        <Route
          exact
          path="/welcome/:name"
          render={(props) => (
            <Welcome {...props} name={props.match.params.name} />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
