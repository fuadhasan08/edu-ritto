import { useEffect, useState } from 'react';
import axios from 'axios';

const useSlides = () => {
  const [slidesData, setSlidesData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URI}wp-json/custom/v1/slides`)
      .then((res) => {
        setSlidesData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return slidesData;
};

export default useSlides;
