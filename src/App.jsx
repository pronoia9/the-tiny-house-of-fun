import Logo from './components/Logo';
import './styles.css';
import styled from 'styled-components';

const App = () => {
  return <Wrapper className='App'>Welcome to Section 9: Export in React Site</Wrapper>;
};
export default App;


const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;