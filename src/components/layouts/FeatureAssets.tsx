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
          <Assets
            key={assets.name}
            {...assets}
            style={
              assets.name === 'uplift'
                ? { background: '#C1FFC0', color: '#29A44C' }
                : assets.name === 'sandbox'
                ? { background: '#C0CEFF', color: '#18457A' }
                : { background: '#F5D7FF', color: '#9329A4' }
            }
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureAssets;
