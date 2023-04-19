import Spline from '@splinetool/react-spline';
import styled from 'styled-components';

const SplineScene = () => (
  <Wrapper className='spline__wrapper'>
    <Spline
      className='spline__scene spline'
      scene='https://prod.spline.design/FAgC4ymjPdH08LIp/scene.splinecode'
    />
  </Wrapper>
);
export default SplineScene;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 720px;

  @media (max-width: 560px) {
    min-height: 520px;
  }
`;
