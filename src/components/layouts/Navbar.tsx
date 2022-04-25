import logoFull from '../../img/logo-full.svg';
import arrowDown from '../../img/arrow-down.svg';
import cart from '../../img/cart.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar flex flex-col lg:flex-row justify-between items-center p-5'>
      <div className='logo mb-5 lg:mb-0'>
        <img src={logoFull} className='w-50' alt='GrayScale.io' />
      </div>
      <div className='links'>
        <ul className='list-group flex'>
          <li className='list-item mx-2'>
            <Link to='#' className='flex'>
              For Business
              <span>
                <img src={arrowDown} alt='' />
              </span>
            </Link>
          </li>
          <li className='list-item mx-2'>
            <Link to='#' className='flex'>
              Personal Assets
              <span>
                <img src={arrowDown} alt='' />
              </span>
            </Link>
          </li>
          <li className='list-item mx-2'>
            <Link to='#' className='flex'>
              Cart
              <span className='-mt-1'>
                <img src={cart} alt='' />
              </span>
            </Link>
          </li>
          <li className='list-item mx-2'>
            <Link to='#' className='flex'>
              My Account
              <span>
                <img src={arrowDown} alt='' />
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
