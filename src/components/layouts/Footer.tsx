const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='bg'>
          <div className='content'>
            <h1>
              Subscribe to get updates about new releases, air drops, deals and
              tips anf tricks
            </h1>
            <p>Your data is safe with us</p>
            <form className='form'>
              <input
                type='text'
                className='text-input'
                placeholder='enter your email'
              />
              <input type='submit' value='Subscribe' className='btn' />
            </form>
          </div>
        </div>
      </div>
      <p className='text-center py-5'>Team Grayscale</p>
    </>
  );
};

export default Footer;
