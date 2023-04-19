import styled from 'styled-components';
import * as TextStyles from '../utils/TextStyles';

const DownloadButton = ({ file }) => (
  <a className='download-button__link' href={file} target='_blank' rel='noreferrer'>
    <Wrapper className='download-button__wrapper'>
      <Circle className='download-button__circle' />
      <Title className='download-button__title'>Download</Title>
    </Wrapper>
  </a>
);

export default DownloadButton;

const Wrapper = styled.div`
  width: 210px;
  display: flex;
  gap: 12px;
  background: linear-gradient(180deg, #baaed1 0%, rgba(186, 174, 209, 0) 100%);
  border: 2px solid rgba(255, 255, 255, 0.8);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  padding: 10px;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  cursor: pointer;
  box-sizing: border-box;

  :hover {
    transform: translateY(-2px);
  }
`;

const Circle = styled.div`
  width: 24px;
  height: 24px;
  background: linear-gradient(180deg, #a9a9a9 0%, rgba(240, 240, 240, 0) 100%);
  border: 2px solid rgba(255, 255, 255, 0.8);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
`;

const Title = styled(TextStyles.BodyMain)`
  color: #000000;
`;
