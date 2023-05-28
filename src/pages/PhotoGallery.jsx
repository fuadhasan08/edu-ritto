import React, { useState } from 'react';
import useGalleryData from '../hooks/useGalleryData';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import PageTitle from '../components/common/PageTitle';
import useCulturalData from '../hooks/useCulturalPhotos';
import useSportsData from '../hooks/useSportsPhoto';

const PhotoGallery = () => {
  const [index, setIndex] = useState(-1);

  const { galleryData, gallery } = useGalleryData();
  const { culturalGalleryData, culturalGallery } = useCulturalData();
  const { sportsData, sports } = useSportsData();

  const mergedgalleryData = [
    ...galleryData,
    ...culturalGalleryData,
    ...sportsData,
  ];
  const mergedgallery = [...gallery, ...culturalGallery, ...sports];

  return (
    <div className='px-2 lg:px-0 flex-1 lg:col-span-8 mt-5 lg:mt-0'>
      <PageTitle title='ফটোগ্যালারি' />
      {mergedgallery ? (
        <>
          <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-5'>
            {mergedgallery.map((item, index) => {
              return (
                <img
                  src={item.src}
                  key={index}
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
            slides={mergedgalleryData}
          />
        </>
      ) : (
        'No Photos Found'
      )}
    </div>
  );
};

export default PhotoGallery;
