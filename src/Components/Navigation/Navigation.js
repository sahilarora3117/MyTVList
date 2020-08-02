import React, {Fragment} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Top from '../Top/Top'
import Home from '../Home/Home';
import Info from '../ShowInfo/ShowInfo';
import {Navbar, Nav} from 'react-bootstrap';
export default function App() {
    return (
    <Router>
  <Navbar bg="dark" variant="dark" fixed="top">
    <Navbar.Brand href="/">MyTVList</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/top">Trending</Nav.Link>
      <Nav.Link href="/pricing">Pricing</Nav.Link>
    </Nav>
  </Navbar>
    
        <Route path="/" exact component={Fav} />
        <Route path="/top" component={TopView} />
        <Route path="/show/:id" component={ShowInfo} />
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