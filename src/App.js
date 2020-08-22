import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FindEpisode from "../src/components/FindEpisode";
import EpisodeList from "../src/components/EpisodeList";
import "./styles.css";

// Author: SHIVARAJ LONI
// github: https://github.com/shivarajloni
// linkedIN: https://www.linkedin.com/in/shivaraj-l-45472b111/

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={EpisodeList} />
          <Route exact path="/findbyname" component={FindEpisode} />
        </Switch>
      </Router>
    </div>
  );
}
