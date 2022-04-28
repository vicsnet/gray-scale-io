import Assets, { AssetsItem } from './Assets';
import upLift from '../../img/uplift.svg';
import sandbox from '../../img/sandbox.svg';
import decentraland from '../../img/decentraland.svg';

const assetsItems: AssetsItem[] = [
  {
    name: 'uplift',
    image: upLift,
    link: 'uplift',
  },
  {
    name: 'sandbox',
    image: sandbox,
    link: 'sandbox',
  },
  {
    name: 'decentraland',
    image: decentraland,
    link: 'decentraland',
  },
];

const FeatureAssets = () => {
  return (
    <div className='w-full feature-card'>
      <h1 className='text-center'>Featured Assets</h1>
      <div className='card-container'>
        {assetsItems.map((assets: AssetsItem) => (
          <Assets key={assets.name} {...assets} />
        ))}
      </div>
    </div>
  );
};

export default FeatureAssets;
