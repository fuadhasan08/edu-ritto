import useFetch from '../hooks/useFetch'

const Home = () => {
  const fetchedData = useFetch('http://localhost/eduritto/wp-json/wp/v2/pages')

  const homeData = fetchedData.find((item) => item.page_type === 'home')

  return (
    <>
      <p
        className='text-body mt-5'
        dangerouslySetInnerHTML={{ __html: homeData?.content?.rendered }}
      ></p>
    </>
  )
}

export default Home
