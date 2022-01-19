import React from "react";
import Pokemon from './pages/Pokemon'
import About from "./pages/About";
import Education from "./pages/Education";
import MyProjects from "./pages/MyProjects";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";

export default function App() {
  return (
    <Router>


      <ul>
      <Link to='/'>
      <div className="nav-bar-link">Home</div>
      </Link>
      <Link to='/education'>
      <div className="nav-bar-link">Education</div>
      </Link>
      <Link to='/myprojects'>
      <div className="nav-bar-link">MyProjects</div>
      </Link>
      <Link to='/about'>
      <div className="nav-bar-link">About</div>
      </Link>
      </ul>



      <div>
      <Routes>
      <Route path="/" element={Home()} />
      <Route path="/pokemon" element={Pokemon()} />
      <Route path="/about" element={About()} />
      <Route path="/education" element={Education()} />
      <Route path="/myprojects" element={MyProjects()} />
      <Route path="/movies" element={Movies()} />
      </Routes>
      </div>
    </Router>
  );
}
