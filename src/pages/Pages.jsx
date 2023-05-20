import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom'

const Pages = () => {
  const fetchedData = useFetch(
    'https://demo.ritto360.com/eduritto/wp-json/wp/v2/pages'
  )
  const { slug } = useParams()

  const filteredfetchedData = fetchedData.filter((item) => item.page_type == '')

  const pageData = filteredfetchedData.find((item) => item.slug === slug)

  return (
    <div
      dangerouslySetInnerHTML={{ __html: pageData?.content?.rendered }}
      className='flex-1 lg:col-span-8'
    ></div>
  )
}

export default Pages
