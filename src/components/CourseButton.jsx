import './CourseButton.scss';

const CourseButton = ({ title }) => (
  <div className='course-button__wrapper'>
    <p className='course-button__text'>{title}</p>
  </div>
);

export default CourseButton;
