import React from 'react';

const LearnMore = () => {
  return (
    <div className='text-center'>
      <h1 className='text-bold'>Learn more about GreyScale.io</h1>
      <video
        src='../../../../../Movies/Swagger/Season 1/Swagger S01E01 - NBA.mp4'
        height={200}
        width={300}
        className='w-full rounded-2xl'
        controls={true}
        autoPlay
      />
    </div>
  );
};

export default LearnMore;
