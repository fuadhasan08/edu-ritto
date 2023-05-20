import useFetch from '../hooks/useFetch'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import useSlides from '../hooks/useSlides'

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 800,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: 'ease',
  }

  const fetchedData = useFetch(
    'https://demo.ritto360.com/eduritto/wp-json/wp/v2/pages'
  )

  const homeData = fetchedData.find((item) => item.page_type === 'home')

  const slidesData = useSlides()

  return (
    <div className='px-2 lg:px-0 flex-1 lg:col-span-8'>
      {slidesData && (
        <Slider {...settings} className='cursor-pointer'>
          {slidesData?.map((item) => {
            const { id, src } = item
            return (
              <div key={id} className='max-w-full h-500px'>
                <img src={src} alt='' className='object-cover object-bottom' />
              </div>
            )
          })}
        </Slider>
      )}

      <div
        dangerouslySetInnerHTML={{ __html: homeData?.content?.rendered }}
        className='mt-16'
      ></div>
    </div>
  )
}

export default Home
