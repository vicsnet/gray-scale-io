import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import AppState from './context/appContext/AppState';
import CreateNft from './components/layouts/mint/CreateNft';

const App = () => {
  return (
    <AppState>
      <Router>
        <Routes>
          {/* <Route path='/' element={<Home />} />   */}
          <Route path='/' element={<CreateNft />} />
        </Routes>
      </Router>
    </AppState>
  );
};

export default App;
