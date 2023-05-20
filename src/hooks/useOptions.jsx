import { useEffect, useState } from 'react'
import axios from 'axios'

const useOptions = () => {
  const [optionsData, setOptionsData] = useState([])

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URI}wp-json/redux/v1/data`)
      .then((res) => {
        setOptionsData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return optionsData
}

export default useOptions
