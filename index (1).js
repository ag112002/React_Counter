import React from 'react';
import ReactDOM from 'react-dom';
import Blog from './components/Blog'
import Data from './components/coins'
import {App} from './components/App'
import './components/Blog.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <App>
      <div>
      <Link to="/blog">
       <center> <button className="custom-button">HEY,VIEW MY EXPERIENCE SO FAR</button> </center>
      </Link>
    </div>
        <Routes>
          <Route path="/" element={<Data />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </App>
    </Router>
  </React.StrictMode>
);





 

    
  
