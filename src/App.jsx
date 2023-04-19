import Logo from './components/Logo';
import './styles.css';
import styled from 'styled-components';

const App = () => {
  return (
    <Wrapper className='App'>
      <LogoContainer>
        <Logo />
      </LogoContainer>
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
