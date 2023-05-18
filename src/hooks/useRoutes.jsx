import { useEffect, useState } from 'react'
import axios from 'axios'

const usePagesRoutes = () => {
  const [menuData, setMenuData] = useState([])

  useEffect(() => {
    axios
      .get('https://demo.ritto360.com/eduritto/wp-json/mycustomapi/v1/menu')
      .then((res) => {
        setMenuData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [menuData])

  return menuData
}

export default usePagesRoutes
