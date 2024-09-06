// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/HomePage/Homepage';
import Blog from './Pages/Blogs/Blog'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;


