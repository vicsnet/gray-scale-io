import { FC } from 'react';
import { Link } from 'react-router-dom';

export type AssetsItem = {
  name?: string;
  image?: string;
  link?: string;
};

const Assets: FC<AssetsItem> = ({ name, image }) => {
  return (
    <div className='assets-item'>
      <div className='img'>
        <img src={image} alt={name} />
        <Link
          to='/'
          className='assets-link'
          // Match the styles of every assets to it picture
          // TODO - Need to trouble shoot that
          style={
            name === 'uplift'
              ? { background: '#C1FFC0', color: '#29A44C' }
              : name === 'sandbox'
              ? { background: '#C0CEFF', color: '#18457A' }
              : { background: '#F5D7FF', color: '#9329A4' }
          }>
          Explore
        </Link>
      </div>
      <p
        className='p-4 text-xl'
        style={
          name === 'uplift'
            ? { color: '#29A44C' }
            : name === 'sandbox'
            ? { color: '#18457A' }
            : { color: '#9329A4' }
        }>
        {name}
      </p>
    </div>
  );
};

export default Assets;
