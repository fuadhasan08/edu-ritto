const LogoPanel = () => {
  return (
    <div className='flex items-center sm:max-h-52 h-full sm:flex-nowrap flex-wrap sm:text-left text-center justify-center sm:justify-start'>
      <img
        src='https://media.istockphoto.com/id/1171617683/vector/education-symbol-design-template-pencil-and-book-icon-stylized.jpg?s=612x612&w=0&k=20&c=DrQKLkTfyQ512yTZlhvhrwFVVEPTcq3BHKN68anvGb4='
        className='sm:w-48 sm:h-48 h-40 w-40 text-center'
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
  )
}

export default LogoPanel
