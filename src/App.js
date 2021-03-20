import "./App.css";
import "bulma/css/bulma.css";

import React, { Component } from "react";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { Switch, Route } from "react-router-dom";
import {NotFound} from './pages/NoFound'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/detail/:id" component={Detail} />
          <Route  component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

export default App;
