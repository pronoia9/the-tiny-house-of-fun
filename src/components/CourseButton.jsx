import './CourseButton.css';

const CourseButton = (props) => {
  const { title } = props;

  return (
    <div className="course-button__wrapper">
      <p className='course-button__text'>{title}</p>
    </div>
  );
};

export default CourseButton;
