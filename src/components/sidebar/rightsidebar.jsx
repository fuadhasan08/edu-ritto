import { FaSquare } from 'react-icons/fa'
import useFetch from '../../hooks/useFetch'

const RightSidebar = () => {
  const fetchedData = useFetch('wp-json/redux/v1/data')

  const { sovapoti, principle, important_links } = fetchedData

  return (
    <div className='px-2 lg:pr-2 lg:pl-0 space-y-5 lg:text-left text-center lg:col-span-2 lg:max-w-[200px] w-full lg:block flex justify-center flex-col'>
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
      {sovapoti?.url && (
        <div className='rounded-lg border border-brderCard'>
          <h5 className='bg-bgCard py-2 text-center font-bold border-b border-brderCard text-primary'>
            সভাপতি
          </h5>

          <div className='grid lg:h-[240px] lg:max-w-[190px] overflow-hidden justify-center lg:justify-start'>
            <img
              src={sovapoti?.url}
              alt='vice principle'
              className='h-auto max-w-[190px] object-cover object-center'
            />
          </div>
        </div>
      )}
      {/* অধ্যক্ষ */}
      {principle?.url && (
        <div className='rounded-lg border border-brderCard'>
          <h5 className='bg-bgCard py-2 text-center font-bold border-b border-brderCard text-primary'>
            অধ্যক্ষ
          </h5>

          <div className='grid lg:h-[240px] lg:max-w-[190px] overflow-hidden justify-center lg:justify-start'>
            <img
              src={principle.url}
              alt='principle'
              className='h-auto max-w-[190px] object-cover object-center'
            />
          </div>
        </div>
      )}
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
      {important_links && (
        <div className='rounded-lg border border-brderCard'>
          <h5 className='bg-bgCard py-2 text-center font-bold border-b border-brderCard text-primary'>
            গুরুত্বপূর্ণ লিংক
          </h5>
          <ul className='space-y-1.5 px-1'>
            {important_links?.map((item, index) => {
              const inputText = item

              let title, url

              if (inputText) {
                title = inputText.match(/^([^\[]+)/)[1].trim() || ''
                url = inputText.match(/\[([^]+)\]/)[1].trim() || ''
              }

              return (
                <li
                  className='cursor-pointer bg-bg rounded-sm flex  gap-x-2 text-sm text-text group p-1.5'
                  key={index}
                >
                  <FaSquare className='text-10px mt-1' />
                  <a
                    href={url}
                    className='group-hover:text-primary w-full'
                    target='_blank'
                  >
                    {title}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}

export default RightSidebar
