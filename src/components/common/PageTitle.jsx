const PageTitle = ({ title }) => {
  return (
    <div className='mb-5'>
      <h4>{title ? title : ''}</h4>
    </div>
  );
};

export default PageTitle;
