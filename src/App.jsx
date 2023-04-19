import styled from 'styled-components';

import Logo from './components/Logo';
import DownloadButton from './components/DownloadButton';
import PlayButton from './components/PlayButton';
import * as TextStyles from './utils/TextStyles';

const App = () => {
  return (
    <Wrapper className='App'>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <TextContainer>
        <Title>3D Room with Game Controls</Title>
        <Description>
          Learn how to create a 3D scene in Spline with game interactions like moving, jumping, mouse events
          and dark mode state.
        </Description>
      </TextContainer>
      <ButtonContainer>
        <DownloadButton />
        <PlayButton />
      </ButtonContainer>
    </Wrapper>
  );
};
export default App;

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 44px;
  left: 0px;
`;

const TextContainer = styled.div`
  display: grid;
  gap: 24px;
  max-width: 460px;
  padding: 225px 0px 0px 56px;
`;

const Title = styled(TextStyles.H1)``;

const Description = styled.p`
  max-width: 360px;
  text-align: left;
  font-family: 'Inter', BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
  color: rgba(0, 0, 0, 0.6);
  margin: 0;
`;

const ButtonContainer = styled.div``;