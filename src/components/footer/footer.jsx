import React from 'react';

const GlobalFooter = () => {
  return (
    <div className='mt-4 p-4 border-t border-primary text-center'>
      <p className='text-base '>
        Copyright {new Date().getFullYear()} - AKM School. All Rights Reserved.
        Powered By:
        <a href='https://ritto360.com' target='_blank' className='text-primary'>
          Ritto360
        </a>
      </p>
    </div>
  );
};

export default GlobalFooter;
