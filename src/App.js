import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Pages
import SubmitResume from './pages/confirm-resume/SumbitResume';
import Home from './pages/home/Home';
import ViewTalent from './pages/view-talent/ViewTalent';

//Components
import Header from './components/header/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route exact path="" element={<Home />} />
          <Route exact path="/apply" element={<SubmitResume />} />
          <Route exact path="/view-talent" element={<ViewTalent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
