const LogoPanel = () => {
  return (
    <div className='flex items-center sm:max-h-52 h-full sm:flex-nowrap flex-wrap sm:text-left text-center justify-center sm:justify-start border-b border-primary lg:pb-0 pb-8'>
      <img
        src='/assets/akm.png'
        className='h-auto w-full max-w-[200px] text-center p-5'
        alt='Site Logo'
      />

      <div className='font-title sm:mt-3'>
        <h1 className='xlg:text-5xl sm:text-4xl text-3xl text-body '>
          আব্দুল খালেক মোকসুদা উচ্চ বিদ্যালয়
        </h1>
        <p className='xlg:text-2xl text-xl text-body mt-2'>
          পাইভাকুরী, ঈশ্বরগঞ্জ, ময়মনসিংহ
        </p>
      </div>
    </div>
  );
};

export default LogoPanel;
