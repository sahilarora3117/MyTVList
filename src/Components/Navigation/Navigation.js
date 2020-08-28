import React, {Fragment} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Navigation.css';
import Top from '../Top/Top'
import Home from '../Home/Home';
import Info from '../ShowInfo/ShowInfo';
import {Navbar, Nav} from 'react-bootstrap';
import ResultPage from '../Result/Result';
import Popular from '../Popular/Popular';
import Anticipated from '../Anticipated/Anticipated'
import List from '../List/List';
import Genre from '../Genre/Genre';
export default function App() {
    return (
    <Router>
  <Navbar collapseOnSelect expand="lg"  className="mynav">
  <Navbar.Brand><Link to="/" className="links">MyTVList</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">

    <Nav className="mr-auto">
      <Nav.Link><Link className="links" to="/trending">Trending</Link></Nav.Link>
      <Nav.Link><Link className="links" to="/popular/">Popular</Link></Nav.Link>
      <Nav.Link><Link className="links" to="/anticipated/">Anticipated</Link></Nav.Link>
    </Nav>
    <Nav>
    <Nav.Link><Link className="links" to="/list/">List</Link></Nav.Link>
      <Nav.Link><Link className="links" to="/search/">Search</Link></Nav.Link>

    </Nav>
    </Navbar.Collapse>
  </Navbar>
  <br />
  <br />
  <br />
    
        <Route path="/" exact component={Fav} />
        <Route path="/trending" component={TopView} />
        <Route path="/show/:id" component={ShowInfo} />
        <Route path="/search/" component={Result}/>
        <Route path="/popular/" component={PopularView}/>
        <Route path="/anticipated" component={AntiView}/>
        <Route path="/list"  component={ListView}/>
        <Route path="/list/:genres" component={GenreView}/>
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
const PopularView = () => (
  <Fragment>
    <Popular />
  </Fragment>
)
const AntiView = () => (
  <Fragment>
    <Anticipated />
  </Fragment>
)
const ListView = () => (
  <Fragment>
    <List /> 
  </Fragment>
)

const GenreView = () => (
  <Fragment>
    <Genre />
  </Fragment>
)