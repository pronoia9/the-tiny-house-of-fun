import ImageControl from '../assets/controls.png';
import './Controls.css';

const Controls = () => (
  <div className='controls__container'>
    <p className='controls__subtitle'>Keyboard Key</p>
    <img className='controls__image' src={ImageControl} alt='control-image' />
  </div>
);

export default Controls;
