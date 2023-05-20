import { useEffect, useState } from 'react'
import axios from 'axios'

const useOptions = () => {
  const [optionsData, setOptionsData] = useState([])

  useEffect(() => {
    axios
      .get('https://demo.ritto360.com/eduritto/wp-json/redux/v1/data')
      .then((res) => {
        setOptionsData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [optionsData])

  return optionsData
}

export default useOptions
