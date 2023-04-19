import { ControlContainer1, ControlContainer2, Subtitle, ControlImage } from '../utils/StyledComponents';
import ImageControl from '../assets/controls.png';

const Controls = ({ mobile }) =>
  mobile ? (
    <ControlContainer2 className='controls__container'>
      <Subtitle className='controls__subtitle'>Keyboard Key</Subtitle>
      <ControlImage className='controls__image' src={ImageControl} alt='control-image' />
    </ControlContainer2>
  ) : (
    <ControlContainer1 className='controls__container'>
      <Subtitle className='controls__subtitle'>Keyboard Key</Subtitle>
      <ControlImage className='controls__image' src={ImageControl} alt='control-image' />
    </ControlContainer1>
  );

export default Controls;
