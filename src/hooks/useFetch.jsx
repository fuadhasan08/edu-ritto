import { useEffect, useState } from 'react';
import axios from 'axios';
import { useMemo } from 'react';

const useFetch = (url) => {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URI}/${url}`)
      .then((res) => {
        setFetchedData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return fetchedData;
};

export default useFetch;
