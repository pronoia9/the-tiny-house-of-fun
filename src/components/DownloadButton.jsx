import './DownloadButton.scss';

const DownloadButton = ({ file }) => {
  return (
    <a href={file} target='_blank' rel='noreferrer'>
      <div className='download-button__wrapper'>
        <div className='download-button__circle' />
        <p className='download-button__text'>Download</p>
      </div>
    </a>
  );
};

export default DownloadButton;
