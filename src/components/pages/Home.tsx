import Navbar from '../layouts/Navbar';
import ShowCase from '../layouts/ShowCase';
import FeatureAssets from '../layouts/FeatureAssets';
import Footer from '../layouts/Footer';

const Home = () => {
  return (
    <div className='Home'>
      <div className='container px-10'>
        <Navbar />
        <ShowCase />
        <FeatureAssets />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
