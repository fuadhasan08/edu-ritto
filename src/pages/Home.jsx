import useFetch from '../hooks/useFetch'

const Home = () => {
  const fetchedData = useFetch(
    'https://demo.ritto360.com/eduritto/wp-json/wp/v2/pages'
  )

  const homeData = fetchedData.find((item) => item.page_type === 'home')

  return (
    <>
      <div
        className='px-2 lg:px-0'
        dangerouslySetInnerHTML={{ __html: homeData?.content?.rendered }}
      ></div>
    </>
  )
}

export default Home
