import showCase from '../../img/show-case.svg';
import search from '../../img/search.svg';

const ShowCase = () => {
  return (
    <div className='showCase'>
      <div className='about'>
        <h1>
          <span className='bold'>Find, sell,</span> and{' '}
          <span className='bold'>port</span> metaverse real estate & assets{' '}
        </h1>
        <p>
          Wanna move your assests from World A to World B without barriers? No
          need to build from scratch. Easily move land and assets across worlds
          with <span className='semiBold'>GreyScale.</span> Jump in! The next
          world awaits you inside!
        </p>
        <form>
          <div className='bg-white rounded-xl p-1 flex justify-around'>
            <input type='file' className='input file' />
            <input
              type='text'
              placeholder='| Metaverse/World'
              className='input text'
            />
            <button
              type='submit'
              className='submit flex justify-center items-center text-white px-5 rounded-lg'>
              <span>
                <img src={search} alt='search' />
              </span>
              Submit
            </button>
          </div>
          <button className='sell'>sell</button>
        </form>
      </div>
      <div>
        <img src={showCase} alt='Powered by Conflux' />
      </div>
    </div>
  );
};

export default ShowCase;
