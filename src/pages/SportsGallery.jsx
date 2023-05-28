import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import PageTitle from '../components/common/PageTitle';
import useSportsData from '../hooks/useSportsPhoto';

const SportsGallery = () => {
  const [index, setIndex] = useState(-1);

  const { sportsData, sports } = useSportsData();

  return (
    <div className='px-2 lg:px-0 flex-1 lg:col-span-8 mt-5 lg:mt-0'>
      <PageTitle title='খেলাধুলা' />
      {sports ? (
        <>
          <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-5'>
            {sports.map((item, index) => {
              return (
                <img
                  src={item.src}
                  key={item.id}
                  alt=''
                  className='cursor-pointer border-2 border-primary rounded-md'
                  onClick={() => {
                    setIndex(index);
                  }}
                />
              );
            })}
          </div>
          <Lightbox
            open={index >= 0}
            close={() => setIndex(-1)}
            index={index}
            slides={sportsData}
          />
        </>
      ) : (
        <div>'No Photos Found'</div>
      )}
    </div>
  );
};

export default SportsGallery;
