import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import AppState from './context/appContext/AppState';

const App = () => {
  return (
    <AppState>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </AppState>
  );
};

export default App;
