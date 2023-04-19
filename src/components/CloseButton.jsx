import ButtonImage from '../assets/close-button.png';
import CloseIcon from '../assets/close-icon.png';
import './CloseButton.scss';

const CloseButton = ({ isOpen, onClick }) => (
  <div className={`close-button__wrapper${isOpen ? ' isOpen' : ''}`}>
    <img className='close-button__image' src={ButtonImage} alt='close-button' />
    {isOpen && <img className='close-button__icon' onClick={onClick} src={CloseIcon} alt='close-icon' />}
  </div>
);

export default CloseButton;
