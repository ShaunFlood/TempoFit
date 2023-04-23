import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './dashboard';
import './app.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/profile" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;