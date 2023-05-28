import PageTitle from '../components/common/PageTitle';
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';

const Pages = () => {
  const fetchedData = useFetch('wp-json/wp/v2/pages');
  const { slug } = useParams();

  const filteredfetchedData = fetchedData.filter(
    (item) => item.page_type == ''
  );

  const pageData = filteredfetchedData.find((item) => item.slug === slug);

  return (
    <div className='px-2 lg:px-0 flex-1 lg:col-span-8 mt-5 lg:mt-0'>
      <PageTitle title={pageData?.title?.rendered} />
      <div
        dangerouslySetInnerHTML={{ __html: pageData?.content?.rendered }}
      ></div>
    </div>
  );
};

export default Pages;
