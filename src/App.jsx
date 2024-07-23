import React from 'react';
import StudentCard from './components/StudentCard.jsx';
import './App.css';
import ReactLogo from './assets/eye.svg';


function App() {
  return (
    <div className="App">
      <StudentCard 
        name="S Harish Kumar" 
        registrationNumber="212221230104"
        photo={ReactLogo}
      />
    </div>
  );
}

export default App;

