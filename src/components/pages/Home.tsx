import Navbar from '../layouts/Navbar';
import ShowCase from '../layouts/ShowCase';
import FeatureAssets from '../layouts/FeatureAssets';

const Home = () => {
  return (
    <div className='Home'>
      <div className='container px-10'>
        <Navbar />
        <ShowCase />
        <FeatureAssets />
      </div>
    </div>
  );
};

export default Home;
