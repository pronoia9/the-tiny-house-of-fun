import CourseButton from './CourseButton';
import './Header.css';

const Header = () => {
  return (
    <div className='header__wrapper'>
      <a href='https://designcode.io/' target='_blank' rel='noreferrer'>
        <p className='header__caption'>login</p>
      </a>
      <a href='https://designcode.io/spline2-game-controls' target='_blank' rel='noreferrer'>
        <CourseButton title='take course' />
      </a>
    </div>
  );
};

export default Header;
