import oneImage from '../../img/one.svg';
import twoImage from '../../img/two.svg';
import threeImage from '../../img/three.svg';
const howToSteps = [
  {
    id: 1,
    title: 'Connect your wallet',
    body: 'Set up your wallet to transact in $CFX and click connect to link your selected wallet',
    image: oneImage,
  },
  {
    id: 2,
    title: 'Upload your land/asset',
    body: 'Attach your land/asset and enter the required details about the asset to be listed for sale',
    image: twoImage,
  },
  {
    id: 3,
    title: 'List item for sale',
    body: 'Review the asset’s details and click on confirm to list your items publicly for sale',
    image: threeImage,
  },
];

const HowTo = () => {
  return (
    <div className='how-to'>
      <div className='header'>
        <h1>Simple how-to steps</h1>
        <p>
          Listing a metaverse land or asset for sale on GreyScale is simple with
          3 easy steps.Discover and buy metaverse real estate and NFTs for
          muliple virtual worlds securely and with ease.
        </p>
      </div>
      <div className='cards'>
        {howToSteps.map(card => (
          <div className='card'>
            <img src={card.image} alt={card.title} />
            <h1>{card.title}</h1>
            <p>{card.body}</p>
          </div>
        ))}
      </div>
      <a href='!#' className='text-white bg-black px-5 py-3 rounded-xl'>
        Learn More
      </a>
    </div>
  );
};

export default HowTo;
