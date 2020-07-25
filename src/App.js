import React from "react";

import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useParams
} from "react-router-dom";
import Home from './Home' ;
import About from './About';
import shoes from './shoes.js';
import Footerc from './footerc';
export default function App() {
  return (
    <Router>
      <nav className="Nav" >
        <Link to="/" className="NavLink">Home</Link>
        <Link to="/launch" className="NavLink">Launch</Link>
        <Link to="/about" className="NavLink">About</Link>
        </nav>
      <Routes>
        <Route path="/" element={
<div><LaunchIndexFront /> <Home /> <Footerc /></div>} />
        <Route path="about" element={<About />}/>
        <Route path="launch" element={<Launch />}>
           <Route path="/" element={<LaunchIndex />} />
          <Route path=":slug" element={<LaunchShoe />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

function Launch () {
  return (
  <div>
    <h1>Launch</h1>

    <Outlet />
  </div>
);
}


function NotFound () {
      return (
    <div>
      <h1>Not found!</h1>
      <p>Sorry your page was not found!</p>
    </div>
  );
}




function LaunchIndexFront () {
    
  return (
    <ul className="ulhorizontal">
      {Object.entries(shoes).map(([slug, { name, img,price }]) => (
        <li key={slug} className="hirozontal">
          <Link to={`/launch/${slug}`}>
           <div> 
            <h2>{name}</h2>
      <p>{price}</p>
            <img src={img} alt={name} className="imagemenu"/>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}



function LaunchIndex () {
    
  return (
    <ul>
      {Object.entries(shoes).map(([slug, { name, img }]) => (
        <li key={slug}>
          <Link to={`/launch/${slug}`}>
            
            <h2>{name}</h2>
            <img src={img} alt={name} className="imagemenu"/>
            
          </Link>
        </li>
      ))}
    </ul>
  );
}



function LaunchShoe () {
  const { slug } = useParams();
  const shoe = shoes[slug];

  if (!shoe) {
    return <h2>Not Found!</h2>;
  }

  const { name, img,description,price } = shoe;

  return (
    <div>
      <h2>{name}</h2>
      <img src={img} alt={name} />
      <h1>{price}</h1>
      <h2>Product details</h2>
      <p>{description}</p>
    </div>
  );
}


