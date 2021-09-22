import React from "react";
import "./App.css";
import { Container } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

function App() {
  return (
    <Router>
      <Container>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/auth" exact>
            <Auth />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
