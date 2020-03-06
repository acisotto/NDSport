import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Navbar from "./components/navbar.component.js";
import EventList from "./components/eventList.component.js";
import CreateEvent from "./components/create-event.component.js";
import EditEvent from "./components/edit-event.component.js"

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        
        <Route path="/" exact component={EventList} />
        <Route path="/add" exact component={CreateEvent} />
        <Route path="/update/:id" component={EditEvent} />
      </div>
    </Router>
  );
}

export default App;
