import Navbar from '../layouts/Navbar';
import ShowCase from '../layouts/ShowCase';

const Home = () => {
  return (
    <div className='Home'>
      <div className='container px-10'>
        <Navbar />
        <ShowCase />
      </div>
    </div>
  );
};

export default Home;
