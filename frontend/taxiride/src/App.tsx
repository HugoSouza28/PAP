import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Rota } from './routes';


const App: React.FC = () => {
 return (
  <Router>
    <Rota/>
  </Router>
 );
};

export default App;