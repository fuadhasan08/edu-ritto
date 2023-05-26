import axios from 'axios';

import { useState, useEffect } from 'react';
import PageTitle from '../components/common/PageTitle';

const NoticeList = () => {
  const [notices, setNotices] = useState([]);
  //   .get(`${import.meta.env.VITE_API_URI}wp-json/ritto/v1/teachers`)
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URI}wp-json/ritto/v1/notices`)
      .then((response) => {
        setNotices(response.data.sort((a, b) => a.id - b.id));
      })
      .catch((error) => {
        console.error('Error fetching teacher data:', error);
      });
  }, []);

  return (
    <div className='px-2 lg:px-0 flex-1 lg:col-span-8 mt-10 mb-5  lg:mt-0'>
      <PageTitle title='নোটিশ বোর্ড' />
      <div className='overflow-x-auto'>
        <div className='min-w-[850px] lg:min-w-[991px] xl:min-w-full'>
          <table className='w-full border-collapse'>
            <thead>
              <tr className='text-left'>
                <th className='px-4 py-2 border border-gray-200'>ক্রমিক নং</th>
                <th className='px-4 py-2 border border-gray-200'>শিরোনাম</th>
                <th className='px-4 py-2 border border-gray-200'>তারিখ</th>
                <th className='px-4 py-2 border border-gray-200'>ডাউনলোড</th>
              </tr>
            </thead>
            <tbody>
              {notices.map((notice, index) => (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} `}
                >
                  <td className='px-4 py-2 border border-gray-200'>
                    {index + 1}
                  </td>
                  <td className='px-4 py-2 border border-gray-200'>
                    {notice.title}
                  </td>
                  <td className='px-4 py-2 border border-gray-200'>
                    {notice.notice?.modified}
                  </td>
                  <td className='px-4 py-2 border border-gray-200'>
                    {notice.notice?.id}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NoticeList;
