import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import SignInStaff from './components/SignInStaff';
import SignUpStaff from './components/SignUpStaff';
import SignInStudent from './components/SignInStudent';
import SignUpStudent from './components/SignUpStudent';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signupstudent" element={<SignUpStudent />} />
        <Route path="/signinstudent" element={<SignInStudent />} />
        <Route path="/signinstaff" element={<SignInStaff />} />
        <Route path="/signupstaff" element={<SignUpStaff />} />
      </Routes>
    </Router>
  );
}

export default App;