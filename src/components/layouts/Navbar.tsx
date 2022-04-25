import logoFull from '../../img/logo-full.svg';
import userIcon from '../../img/user.svg';
import arrowDown from '../../img/arrow-down.svg';
import cart from '../../img/cart.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo-div mb-5 lg:mb-0'>
        <img src={logoFull} className='w-50' alt='GrayScale.io' />
      </div>
      <div className='links'>
        <ul className='list-group flex'>
          <li className='list-item mx-2'>
            <Link to='#' className='flex'>
              <span className='hidden sm:inline sm:px-2'>For</span> Business
              <span>
                <img src={arrowDown} alt='' />
              </span>
            </Link>
          </li>
          <li className='list-item mx-2'>
            <Link to='#' className='flex'>
              <span className='hidden sm:inline sm:px-2'>Personal</span> Assets
              <span>
                <img src={arrowDown} alt='' />
              </span>
            </Link>
          </li>
          <li className='list-item mx-2'>
            <Link to='#' className='flex'>
              Cart
              <span className='-mt-1 ml-1'>
                <img src={cart} alt='' />
              </span>
            </Link>
          </li>
          <li className='list-item mx-2'>
            <Link to='#' className='flex'>
              <span className='hidden sm:inline sm:px-2'>My</span> Account
              <span className='-mt-1 ml-1'>
                <img src={userIcon} alt='' />
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
