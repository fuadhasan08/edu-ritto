import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = (url) => {
  const [fetchedData, setFetchedData] = useState([])

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setFetchedData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return fetchedData
}

export default useFetch
