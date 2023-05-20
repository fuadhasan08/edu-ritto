import { useEffect, useState } from 'react'
import axios from 'axios'

const useSlides = () => {
  const [slidesData, setSlidesData] = useState([])

  useEffect(() => {
    axios
      .get('https://demo.ritto360.com/eduritto/wp-json/custom/v1/slides')
      .then((res) => {
        setSlidesData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [slidesData])

  return slidesData
}

export default useSlides
