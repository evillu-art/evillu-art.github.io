// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import SilentBook from './Components/SilentBook';

const App = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/silent-book" element={<SilentBook />} />
        </Routes>
    </Router>
    );
}

export default App;
