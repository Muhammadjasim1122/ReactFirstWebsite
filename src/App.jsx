
import React from 'react'
import Header from './components/header.jsx'
import Herosection from './components/herosection.jsx'
import Signupform from './components/signupform.jsx'
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";





function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Herosection />} />
        <Route path="/signup" element={<Signupform />} />
      </Routes>
    </Router>
  );
}

export default App