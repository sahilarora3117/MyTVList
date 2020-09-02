import React, {Fragment} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from 'semantic-ui-react';
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
import Search from '../Search/Search';
import Settings from '../Settings/Settings';
import Landing from '../Landing/Landing';
import EpisodeInfo from '../Episode/EpisodeInfo/EpisodeInfo';
export default function App() {
    return (
    <Router>
  <Navbar collapseOnSelect expand="lg"  className="mynav">
  <Navbar.Brand><Link to="/" className="links"><Button inverted color="purple" size="medium">MyTVList</Button></Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">

    <Nav className="mr-auto">
      <Nav.Link><Link className="links" to="/trending"><Button basic inverted compact color="orange">Trending</Button></Link></Nav.Link>
      <Nav.Link><Link className="links" to="/popular/"><Button basic inverted compact color="orange">Popular</Button></Link></Nav.Link>
      <Nav.Link><Link className="links" to="/anticipated/"><Button basic inverted compact color="orange">Anticipated</Button></Link></Nav.Link>
    </Nav>
    <Nav>
    <Nav.Link><Link className="links" to="/list/"><Button icon="tags" circular inverted></Button></Link></Nav.Link>
      <Nav.Link><Link className="links" to="/search/"><Button icon="search" circular inverted></Button></Link></Nav.Link>
      <Nav.Link><Link className="links" to="/settings/"><Button icon="cog" circular inverted></Button></Link></Nav.Link>

    </Nav>
    </Navbar.Collapse>
  </Navbar>

    
        <Route path="/" exact component={Fav} />
        <Route path="/trending" component={TopView} />
        <Route path="/show/:id" component={ShowInfo} />
        <Route path="/search/" exact component={SearchView}/>
        <Route path="/popular/" component={PopularView}/>
        <Route path="/anticipated" component={AntiView}/>
        <Route path="/list"  component={ListView}/>
        <Route path="/list/:genres" component={GenreView}/>
        <Route path="/search/:query" component={ResultPage}/>
        <Route path="/settings" exact component={SettingsPage}/>
        <Route path="/relevant-home/" component={RelevantHome}/>
        <Route path="/episodes/:id/season/:season/episode/:episode" component={EpisodePage}/>
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

const SearchView = () => (
  <Fragment>
    <Search />
  </Fragment>
)


const SettingsPage = () => (
  <Fragment> 
    <Settings />
  </Fragment>
)

const RelevantHome = () => (
  <Fragment>
    <Landing />
  </Fragment>
)


const EpisodePage = () => (
  <Fragment>
    <EpisodeInfo />
  </Fragment>
)