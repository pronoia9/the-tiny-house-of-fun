import styled from 'styled-components';
import * as TextStyles from '../utils/TextStyles';

const CourseButton = ({ title }) => (
  <Wrapper className='course-button__wrapper'>
    <Title className='course-button__title'>{title}</Title>
  </Wrapper>
);

export default CourseButton;

const Wrapper = styled.div`
  display: grid;
  align-content: center;
  background: #ffffff;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  cursor: pointer;

  :hover {
    transform: translateY(-2px);
  }
`;

const Title = styled(TextStyles.Caption)`
  padding: 12px 20px;
  text-transform: uppercase;
`;
