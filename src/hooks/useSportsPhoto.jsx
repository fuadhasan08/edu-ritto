import { useEffect, useState } from 'react';
import axios from 'axios';

const useSportsData = () => {
  const [sportsData, setGalleryData] = useState([]);
  const [sports, setGallery] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URI}/wp-json/custom/v1/sports`)
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

  return { sportsData, sports };
};

export default useSportsData;
