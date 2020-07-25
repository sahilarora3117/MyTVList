import React, {Fragment} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Top from '../Top/Top'
import Home from '../Home/Home';
import Info from '../ShowInfo/ShowInfo';

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
        <Route path="/" exact component={Fav} />
        <Route path="/top" component={TopView} />
        <Route path="/show/:id" component={ShowInfo} />
       
      </main>
  </Router>
    );
  }


const Fav = () => (
    <Fragment>
      <h1>Home</h1>
      <Home />
    </Fragment>
    );

const TopView = () => (
  <Fragment>
    <h1>Top</h1>
    <Top />
  </Fragment>
)


const ShowInfo = () => (
  <Fragment>
    <Info />
  </Fragment>
)