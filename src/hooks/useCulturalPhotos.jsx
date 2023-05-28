import { useEffect, useState } from 'react';
import axios from 'axios';

const useCulturalData = () => {
  const [culturalGalleryData, setGalleryData] = useState([]);
  const [culturalGallery, setGallery] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URI}/wp-json/custom/v1/cultural`)
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

  return { culturalGalleryData, culturalGallery };
};

export default useCulturalData;
