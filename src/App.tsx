import './App.css';
import AppState from './context/appContext/AppState';

const App = () => {
  return (
    <AppState>
      <div className='flex justify-center items-center'>
        <h1 className='text-2xl'>Team Gray scale</h1>
      </div>
    </AppState>
  );
};

export default App;
