import axios from 'axios';

import { useState, useEffect } from 'react';
import PageTitle from '../components/common/PageTitle';

const NoticeList = () => {
  const [notices, setNotices] = useState([]); // Array to store fetched data
  const [sortBy, setSortBy] = useState('date'); // Default sort by date
  const [sortOrder, setSortOrder] = useState('dsc'); // Default sort order
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const [noticesPerPage] = useState(5); // Number of notices per page
  const [selectedMonth, setSelectedMonth] = useState(
    `${new Date().getMonth() + 1}`
  ); // Selected month for filtering
  const [selectedYear, setSelectedYear] = useState(
    `${new Date().getFullYear()}`
  ); // Selected year for filtering

  //   .get(`${import.meta.env.VITE_API_URI}wp-json/ritto/v1/teachers`)
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URI}wp-json/ritto/v1/notices`)
      .then((response) => {
        setNotices(response.data);
      })
      .catch((error) => {
        console.error('Error fetching teacher data:', error);
      });
  }, []);

  // Sort by date
  const sortByDate = () => {
    setSortBy('date');
    setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  // Sort by specific date range
  const sortBySpecificDate = (month, year) => {
    setSortBy('specificDate');
    setSelectedMonth(month);
    setSelectedYear(year);
  };

  // Custom sorting function based on the selected sort option
  const sortedNotices = () => {
    let sorted = [...notices];

    if (sortBy === 'date') {
      sorted.sort((a, b) => {
        const dateA = new Date(a.id);
        const dateB = new Date(b.id);

        if (sortOrder === 'asc') {
          return dateA - dateB;
        } else {
          return dateB - dateA;
        }
      });
    } else if (sortBy === 'specificDate' && selectedMonth && selectedYear) {
      sorted = sorted.filter((notice) => {
        const noticeDate = new Date(notice.notice?.modified);
        const noticeMonth = noticeDate.getMonth() + 1; // Adding 1 because getMonth() returns 0-11
        const noticeYear = noticeDate.getFullYear();

        return (
          noticeMonth === parseInt(selectedMonth) &&
          noticeYear === parseInt(selectedYear)
        );
      });
    }

    return sorted;
  };

  // Calculate index of the last notice on the current page
  const indexOfLastNotice = currentPage * noticesPerPage;
  // Calculate index of the first notice on the current page
  const indexOfFirstNotice = indexOfLastNotice - noticesPerPage;
  // Get the current notices for the current page
  const currentNotices = sortedNotices().slice(
    indexOfFirstNotice,
    indexOfLastNotice
  );

  const fortmatDate = (str) => {
    const monthName = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const date = new Date(str);

    const year = date.getFullYear();
    const month = monthName[date.getMonth()];
    const day = date.getDate();

    return `${day} ${month}, ${year}`;
  };

  const paginationArray = new Array(
    Math.floor(notices.length / noticesPerPage)
  ).fill('');

  return (
    <div className='px-2 lg:px-0 flex-1 lg:col-span-8 mt-10 mb-5  lg:mt-0'>
      <PageTitle title='নোটিশ বোর্ড' />
      <div className='flex justify-end my-4 gap-x-2'>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className='px-4 py-3 bg-gray-100 focus:outline-none'
        >
          <option value='' disabled>
            Select Year
          </option>
          <option value='2022'>2022</option>
          <option value='2023'>2023</option>
          <option value='2024'>2024</option>
        </select>

        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className='px-4 py-3 bg-gray-100 focus:outline-none'
        >
          <option value='' disabled>
            Select Month
          </option>
          <option value='1'>January</option>
          <option value='2'>February</option>
          <option value='3'>March</option>
          <option value='4'>April</option>
          <option value='5'>May</option>
          <option value='6'>June</option>
          <option value='7'>July</option>
          <option value='8'>August</option>
          <option value='9'>September</option>
          <option value='10'>October</option>
          <option value='11'>November</option>
          <option value='12'>December</option>
        </select>
        <button
          onClick={() => sortBySpecificDate(selectedMonth, selectedYear)}
          className='bg-secondary px-5 py-3 hover:bg-primary transition-all duration-150 hover:text-white'
        >
          Filter
        </button>
      </div>
      <div className='overflow-x-auto'>
        <div className='min-w-[850px] lg:min-w-[991px] xl:min-w-full'>
          <table className='w-full border-collapse'>
            <thead>
              <tr className='text-left'>
                <th className='px-4 py-2 border border-gray-200'> নং</th>
                <th className='px-4 py-2 border border-gray-200'>শিরোনাম</th>
                <th
                  className='min-w-[150px] px-4 py-2 border border-gray-200 cursor-pointer'
                  onClick={sortByDate}
                >
                  তারিখ {sortOrder === 'asc' ? '↑' : '↓'}
                </th>
                <th className='px-4 py-2 border border-gray-200'>ডাউনলোড</th>
              </tr>
            </thead>
            <tbody>
              {currentNotices.map((notice, index) => (
                <tr
                  key={index}
                  className={`  ${
                    index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
                  } `}
                >
                  <td className='px-2 py-2 border border-gray-200'>
                    {notice.id}
                  </td>
                  <td className='px-4 py-5 border border-gray-200'>
                    {notice.title}
                  </td>
                  <td className='min-w-[150px] px-4 py-2 border border-gray-200'>
                    {fortmatDate(notice.notice?.modified)}
                  </td>
                  <td className='px-4 py-2 border border-gray-200'>
                    <a href={notice.notice?.url} target='_blank'>
                      Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div></div>
        </div>
      </div>
      {/* Pagination */}
      {paginationArray.length !== 0 && (
        <div className='flex items-center justify-center lg:my-5 my-8'>
          <nav className='flex'>
            <button
              onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
              disabled={currentPage === 1}
              className='px-4 py-3 bg-gray-100 border-r border-gray-400'
            >
              <span className='text-gray-600'>Previous</span>
            </button>
            {paginationArray.map((item, idx) => {
              return (
                <p
                  className={`px-4 py-3 bg-gray-100 border-r border-gray-400 ${
                    currentPage === idx + 1 ? 'bg-primary text-white' : ''
                  }`}
                  key={idx}
                >
                  <span>{idx + 1}</span>
                </p>
              );
            })}
            <button
              onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
              disabled={indexOfLastNotice >= sortedNotices().length}
              className='px-4 py-3 bg-gray-100'
            >
              <span className='text-gray-600'>Next</span>
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default NoticeList;
