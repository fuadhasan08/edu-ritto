import { useEffect } from 'react'
import { FaSquare } from 'react-icons/fa'

const RightSidebar = () => {
  return (
    <div className='lg:max-w-[200px] w-full px-2 lg:pr-2 lg:pl-0 space-y-5 lg:text-left text-center'>
      {/* নোটিশ বোর্ড */}
      <div className='rounded-lg border border-brderCard'>
        <h5 className='bg-bgCard py-2 text-center font-bold border-b border-brderCard text-primary'>
          নোটিশ বোর্ড
        </h5>
        <marquee
          behavior='scroll'
          direction='up'
          scrollamount='2'
          className='space-y-1.5 px-1'
          id='markq'
        >
          <li className='cursor-pointer bg-bg rounded-sm px-2 py-0.5 flex  gap-x-2 text-sm text-text group'>
            <FaSquare className='text-10px mt-1' />
            <a href='#' className='group-hover:text-primary w-full'>
              ২০২০-২০২১ সেশনে ডিগ্রি পাস ২য় বর্ষের ক্লাস শুরু ও ভর্তি নোটিশ।
            </a>
          </li>
          <li className='cursor-pointer bg-bg rounded-sm px-2 py-0.5 flex  gap-x-2 text-sm text-text group'>
            <FaSquare className='text-10px mt-1' />
            <a href='#' className='group-hover:text-primary w-full'>
              ২০২০-২০২১ সেশনে ডিগ্রি পাস ২য় বর্ষের ক্লাস শুরু ও ভর্তি নোটিশ।
            </a>
          </li>
          <li className='cursor-pointer bg-bg rounded-sm px-2 py-0.5 flex  gap-x-2 text-sm text-text group'>
            <FaSquare className='text-10px mt-1' />
            <a href='#' className='group-hover:text-primary w-full'>
              ২০২০-২০২১ সেশনে ডিগ্রি পাস ২য় বর্ষের ক্লাস শুরু ও ভর্তি নোটিশ।
            </a>
          </li>
        </marquee>
      </div>
      {/* সভাপতি */}
      <div className='rounded-lg border border-brderCard'>
        <h5 className='bg-bgCard py-2 text-center font-bold border-b border-brderCard text-primary'>
          সভাপতি
        </h5>
        <div className='grid lg:h-[240px] lg:w-[190px] overflow-hidden justify-center lg:justify-start'>
          <img
            src='https://images.unsplash.com/photo-1616002411355-49593fd89721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFzc3BvcnQlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
            alt='vice principle'
            className='h-auto w-[190px] object-cover '
          />
        </div>
      </div>
      {/* অধ্যক্ষ */}
      <div className='rounded-lg border border-brderCard'>
        <h5 className='bg-bgCard py-2 text-center font-bold border-b border-brderCard text-primary'>
          অধ্যক্ষ
        </h5>
        <div className='grid lg:h-[240px] lg:w-[190px] overflow-hidden justify-center lg:justify-start'>
          <img
            src='https://media.istockphoto.com/id/1315808211/photo/passport-photo-of-serious-brazilian-young-adult-man-with-braces.jpg?b=1&s=170667a&w=0&k=20&c=n3axGyWzgMdSOlF4rTmah7REFDUp6267MndSHdC6Ygc='
            alt='principle'
            className='h-auto w-[190px] object-cover '
          />
        </div>
      </div>
      {/* ফেসবুক পেজ */}
      <div className='rounded-lg border border-brderCard'>
        <h5 className='bg-bgCard py-2 text-center font-bold border-b border-brderCard text-primary'>
          ফেসবুক পেজ
        </h5>
        <div className='p-3'>
          {/* <iframe
            src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnasirabadcollegemymensingh.official%2F&amp;tabs=timeline&amp;width=340&amp;height=500&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId'
            width='100%'
            height=''
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling='no'
            frameBorder='0'
          ></iframe> */}
        </div>
      </div>
      {/* ইউটিউব */}
      <div className='rounded-lg border border-brderCard'>
        <h5 className='bg-bgCard py-2 text-center font-bold border-b border-brderCard text-primary'>
          ইউটিউব
        </h5>
        <div className='p-3'>
          {/* <iframe
            width='100%'
            height=''
            src='https://www.youtube.com/embed/8xdnPI6N_fQ'
            title='Responsive Portfolio Website Design Using HTML CSS &amp; JavaScript With Light/Dark Mode ☀️/🌙'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          ></iframe> */}
        </div>
      </div>
      {/* গুরুত্বপূর্ণ লিংক */}
      <div className='rounded-lg border border-brderCard'>
        <h5 className='bg-bgCard py-2 text-center font-bold border-b border-brderCard text-primary'>
          গুরুত্বপূর্ণ লিংক
        </h5>
        <ul
          behavior='scroll'
          direction='up'
          scrollamount='2'
          className='space-y-1.5 px-1'
        >
          <li className='cursor-pointer bg-bg rounded-sm flex  gap-x-2 text-sm text-text group p-1.5'>
            <FaSquare className='text-10px mt-1' />
            <a href='#' className='group-hover:text-primary w-full'>
              মাধ্যমিক ও উচ্চ শিক্ষা অধিদপ্তর , ঢাকা
            </a>
          </li>
          <li className='cursor-pointer bg-bg rounded-sm  flex  gap-x-2 text-sm text-text group p-1.5'>
            <FaSquare className='text-10px mt-1' />
            <a href='#' className='group-hover:text-primary w-full'>
              মাধ্যমিক ও উচ্চ শিক্ষা, ময়মনসিংহ অঞ্চল
            </a>
          </li>
          <li className='cursor-pointer bg-bg rounded-sm  flex  gap-x-2 text-sm text-text group p-1.5'>
            <FaSquare className='text-10px mt-1' />
            <a href='#' className='group-hover:text-primary w-full'>
              শিক্ষা মন্ত্রণালয়
            </a>
          </li>
          <li className='cursor-pointer bg-bg rounded-sm  flex  gap-x-2 text-sm text-text group p-1.5'>
            <FaSquare className='text-10px mt-1' />
            <a href='#' className='group-hover:text-primary w-full'>
              জাতীয় বিশ্ববিদ্যালয়
            </a>
          </li>
          <li className='cursor-pointer bg-bg rounded-sm  flex  gap-x-2 text-sm text-text group p-1.5'>
            <FaSquare className='text-10px mt-1' />
            <a href='#' className='group-hover:text-primary w-full'>
              উন্মুক্ত বিশ্ববিদ্যালয়
            </a>
          </li>
          <li className='cursor-pointer bg-bg rounded-sm  flex  gap-x-2 text-sm text-text group p-1.5'>
            <FaSquare className='text-10px mt-1' />
            <a href='#' className='group-hover:text-primary w-full'>
              মাধ্যমিক ও উচ্চমাধ্যমিক শিক্ষা বোর্ড, ঢাকা
            </a>
          </li>
          <li className='cursor-pointer bg-bg rounded-sm  flex  gap-x-2 text-sm text-text group p-1.5'>
            <FaSquare className='text-10px mt-1' />
            <a href='#' className='group-hover:text-primary w-full'>
              মাধ্যমিক ও উচ্চমাধ্যমিক শিক্ষা বোর্ড, ময়মনসিংহ
            </a>
          </li>
          <li className='cursor-pointer bg-bg rounded-sm  flex  gap-x-2 text-sm text-text group p-1.5'>
            <FaSquare className='text-10px mt-1' />
            <a href='#' className='group-hover:text-primary w-full'>
              ব্যানবেস
            </a>
          </li>
          <li className='cursor-pointer bg-bg rounded-sm  flex  gap-x-2 text-sm text-text group p-1.5'>
            <FaSquare className='text-10px mt-1' />
            <a href='#' className='group-hover:text-primary w-full'>
              শিক্ষক বাতায়ন
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default RightSidebar
