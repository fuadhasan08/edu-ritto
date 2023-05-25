import axios from 'axios';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { MdContentCopy } from 'react-icons/md';

import { useState, useEffect } from 'react';
import PageTitle from '../components/common/PageTitle';

const TeachersList = () => {
  const [teachers, setTeachers] = useState([]);
  //   .get(`${import.meta.env.VITE_API_URI}wp-json/ritto/v1/teachers`)
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URI}wp-json/ritto/v1/teachers`)
      .then((response) => {
        setTeachers(response.data.sort((a, b) => a.id - b.id));
      })
      .catch((error) => {
        console.error('Error fetching teacher data:', error);
      });
  }, []);

  return (
    <div className='px-2 lg:px-0 flex-1 lg:col-span-8 mt-10 lg:mt-0'>
      <PageTitle title='শিক্ষকবৃন্দের নামের তালিকা' />
      <table className='w-full border-collapse'>
        <thead>
          <tr className='text-left'>
            <th className='px-4 py-2 border border-gray-200'>ক্রমিক নং</th>
            <th className='px-4 py-2 border border-gray-200'>নাম</th>
            <th className='px-4 py-2 border border-gray-200'>পদবি</th>
            <th className='px-4 py-2 border border-gray-200'>বিভাগ</th>
            <th className='px-4 py-2 border border-gray-200'>মোবাইল নাম্বার</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} `}
            >
              <td className='px-4 py-2 border border-gray-200'>{index + 1}</td>
              <td className='px-4 py-2 border border-gray-200'>
                {teacher.title}
              </td>
              <td className='px-4 py-2 border border-gray-200'>
                {teacher.designation}
              </td>
              <td className='px-4 py-2 border border-gray-200'>
                {teacher.subject}
              </td>
              <td className='px-4 py-2 border border-gray-200 items-center inline-flex justify-between w-full'>
                <a href={`tel:${teacher.phone_number}`}>
                  {teacher.phone_number}
                </a>
                <CopyToClipboard text={teacher.phone_number}>
                  <button
                    className='ml-2 focus:outline-none hover:text-primary'
                    title='Copy to Clipboard'
                  >
                    <MdContentCopy size={20} />
                  </button>
                </CopyToClipboard>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeachersList;
