import Logo from './components/Logo';
import './styles.css';
import styled from 'styled-components';
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

const TextContainer = styled.div``;

const Title = styled(TextStyles.H1)``;

const Description = styled.p``;
