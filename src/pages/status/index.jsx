import React from 'react';
import Leftslide from '../../component/leftSlide';
import Tabs from '../../component/tabs';

const Status = () => {

  return (
    <div className="flex w-full">
      {/* leftslide */}
      <Leftslide />

      {/* Right side: Input field for typing messages */}
      <div className="w-full md:w-3/4 md:ml-[25%] mt-[12vh] py-3 px-8">
        <div className='flex flex-col items-center justify-center h-full py-2'>
          <Tabs />
          <div className='p-4 mt-12 primary_shadow w-full md:w-3/4 lg:w-2/4 rounded'>
            <h2 className='font-semibold text-xl'>User</h2>
            <p className='mt-2'>Waiting for supervisor approvel</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Status;
