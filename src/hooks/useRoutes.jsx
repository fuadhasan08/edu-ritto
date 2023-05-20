import { useEffect, useState } from 'react'
import axios from 'axios'

const usePagesRoutes = () => {
  const [menuData, setMenuData] = useState([])

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URI}wp-json/mycustomapi/v1/menu`)
      .then((res) => {
        setMenuData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return menuData
}

export default usePagesRoutes
