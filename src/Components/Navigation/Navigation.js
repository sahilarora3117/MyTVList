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
  <Navbar bg="dark" variant="dark" fixed="top" class="mynav">
  <Navbar.Brand href="/"><Link>MyTVList</Link></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link><Link to="/">MyTVList</Link></Nav.Link>
      <Nav.Link><Link to="/top">Trending</Link></Nav.Link>
    </Nav>
  </Navbar>
  <br />
  <br />
  <br />
    
        <Route path="/" exact component={Fav} />
        <Route path="/top" component={TopView} />
        <Route path="/show/:id" component={ShowInfo} />
        <Route path="/search/" component={Result}/>
  </Router>
    );
  }


const Fav = () => (
    <Fragment>
      <Search />
      <Home />
    </Fragment>
    );

const TopView = () => (
  <Fragment>
    <Search />
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