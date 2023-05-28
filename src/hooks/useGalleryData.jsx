import { useEffect, useState } from 'react';
import axios from 'axios';

const useGalleryData = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URI}/wp-json/custom/v1/photogallery`)
      .then((res) => {
        const data = res.data;
        setGallery(data);
        setGalleryData(
          data.map((item) => {
            return { src: item.src.toString() };
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return { galleryData, gallery };
};

export default useGalleryData;
