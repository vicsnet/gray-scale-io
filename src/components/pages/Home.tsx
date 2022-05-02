import Navbar from '../layouts/Navbar';
import ShowCase from '../layouts/ShowCase';
import FeatureAssets from '../layouts/FeatureAssets';
import Footer from '../layouts/Footer';
import HowTo from '../layouts/HowTo';
import LearnMore from '../layouts/LearnMore';

const Home = () => {
  return (
    <div className='Home'>
      <div className='container px-10'>
        <Navbar />
        <ShowCase />
        <FeatureAssets />
        <HowTo />
        <LearnMore />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
