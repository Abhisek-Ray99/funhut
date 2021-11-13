import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css'
import Home from './screens/home/Home'
import About from './screens/about/About'
import Contact from './screens/contact/Contact'
import TopNav from './screens/home/hero-section/nav/Index'

import AnimatedCursor from "react-animated-cursor"


function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={25}
        color='193, 11, 111'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={3}
      />
      <Router>
        <TopNav />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>

    </>
  );
}

export default App;
