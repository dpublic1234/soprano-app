import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import AboutMe from './AboutMe';

function setNavLinkActive(event) {
  document.querySelectorAll("nav a").forEach(element => {
    element.classList.remove("active");
  });
  event.target.classList.add("active");
}

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <img src="images/soprano-logo.png" alt="Logo" />
          <nav>
            <Link to="/" onClick={setNavLinkActive}>Home</Link>
            <Link to="/" onClick={setNavLinkActive}>Products</Link>
            <Link to="/aboutme" onClick={setNavLinkActive}>About Me</Link>
            <Link to="/" onClick={setNavLinkActive}>Demos</Link>
            <Link to="/" onClick={setNavLinkActive}>Contact Us</Link>
          </nav>
        </header>
        <div>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/aboutme">
            <AboutMe />
          </Route>
        </Switch>
        </div>
        <hr />
        <footer>
          <img src="images/soprano-logo.png" alt="Logo" />
          <div id="footer-icons">
            <i className="fa fa-twitter" />
            <i className="fa fa-facebook-square"/>
            <i className="fa fa-instagram"></i>
          </div>
          <p>Copyright 2020 Soprano.ai</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;