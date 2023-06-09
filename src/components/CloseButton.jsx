import styled from 'styled-components';
import ButtonImage from '../assets/close-button.png';
import CloseIcon from '../assets/close-icon.png';

const CloseButton = ({ isOpen, onClick }) => (
  <Wrapper className='close-button__wrapper closeButton' isOpen={isOpen}>
    <Image className='close-button__image' src={ButtonImage} alt='close-button' />
    {isOpen && <Icon className='close-button__icon' onClick={onClick} src={CloseIcon} alt='close-icon' />}
  </Wrapper>
);

export default CloseButton;

const Wrapper = styled.div`
  position: absolute;
  width: 91px;
  height: 113px;
  z-index: 2;
`;

const Image = styled.img`
  width: 91px;
  height: 113px;
  margin: 0;
`;

const Icon = styled.img`
  position: absolute;
  top: 36px;
  left: 36px;
  margin: auto;
  transform: scale(0.5);
  cursor: pointer;
`;
