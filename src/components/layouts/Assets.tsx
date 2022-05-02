import { CSSProperties, FC } from 'react';
import { Link } from 'react-router-dom';

export type AssetsItem = {
  name?: string;
  image?: string;
  link?: string;
  style?: CSSProperties;
};

const Assets: FC<AssetsItem> = ({ name, image, style }) => {
  return (
    <div className='assets-item'>
      <div className='img'>
        <img src={image} alt={name} />
        <Link
          to='/'
          className='assets-link'
          // Match the styles of every assets to it picture
          // TODO - Need to trouble shoot that
          style={style}>
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
