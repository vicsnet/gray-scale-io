import ReactPlayer from 'react-player';

const url = 'https://www.youtube.com/watch?v=YQmqdpkFwYI';

const LearnMore = () => {
  return (
    <div className='text-center'>
      <h1 className='text-bold'>Learn more about GreyScale.io</h1>
      <ReactPlayer
        width={'100%'}
        height='480px'
        url={url}
        controls
        style={{ borderRadius: '20px' }}
      />
    </div>
  );
};

export default LearnMore;
