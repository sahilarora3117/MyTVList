import React, {Fragment} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Shows from '../Shows/Shows';
import Top from '../Top/Top'
export default function App() {
    return (
    <Router>
      <main>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/top">Top</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/top" component={TopView} />
      </main>
  </Router>
    );
  }


const Home = () => (
    <Fragment>
      <h1>Home</h1>
      <Shows />
    </Fragment>
    );

const TopView = () => (
  <Fragment>
    <h1>Top</h1>
    <Top />
  </Fragment>
)