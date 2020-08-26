import React, {Fragment} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Navigation.css';
import Top from '../Top/Top'
import Home from '../Home/Home';
import Info from '../ShowInfo/ShowInfo';
import {Navbar, Nav} from 'react-bootstrap';
import Search from '../Search/Search';
import ResultPage from '../Result/Result';
export default function App() {
    return (
    <Router>
  <Navbar fixed="top" className="mynav">
  <Navbar.Brand><Link to="/" className="links">MyTVList</Link></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link><Link className="links" to="/trending">Trending</Link></Nav.Link>
      <Nav.Link><Link className="links" to="/search/">Search</Link></Nav.Link>
    </Nav>
  </Navbar>
  <br />
  <br />
  <br />
    
        <Route path="/" exact component={Fav} />
        <Route path="/trending" component={TopView} />
        <Route path="/show/:id" component={ShowInfo} />
        <Route path="/search/" component={Result}/>
  </Router>
    );
  }


const Fav = () => (
    <Fragment>
      <Home />
    </Fragment>
    );

const TopView = () => (
  <Fragment>
    <Top />
  </Fragment>
)


const ShowInfo = () => (
  <Fragment>
    <Info />
  </Fragment>
)

const Result = () => (
  <Fragment>
    <ResultPage />
  </Fragment>
)