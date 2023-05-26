import useFetch from '../hooks/useFetch';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useSlides from '../hooks/useSlides';
import { Link } from 'react-router-dom';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 200,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: 'ease',
  };

  const fetchedData = useFetch(`wp-json/wp/v2/pages`);

  const homeData = fetchedData.find((item) => item.page_type === 'home');

  const slidesData = useSlides();

  return (
    <div className='px-2 lg:px-0 flex-1 lg:col-span-8 mt-5 lg:mt-0'>
      {slidesData && (
        <Slider {...settings} className='cursor-pointer rounded-md'>
          {slidesData?.map((item) => {
            const { id, src } = item;
            return (
              <div key={id} className='max-w-full md:max-h-500px rounded-md'>
                <img
                  src={src}
                  alt=''
                  className='object-cover object-center rounded-md'
                />
              </div>
            );
          })}
        </Slider>
      )}

      <div
        dangerouslySetInnerHTML={{ __html: homeData?.content?.rendered }}
        className='mt-16 '
      ></div>
    </div>
  );
};

export default Home;
