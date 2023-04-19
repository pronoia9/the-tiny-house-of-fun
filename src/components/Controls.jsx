import { ControlContainer1, ControlContainer2, Subtitle, ControlImage } from '../utils/StyledComponents';
import ImageControl from '../assets/controls.png';

const Controls = ({ mobile }) =>
  mobile ? (
    <ControlContainer2>
      <Subtitle>Keyboard Key</Subtitle>
      <ControlImage src={ImageControl} alt='control-image' />
    </ControlContainer2>
  ) : (
    <ControlContainer1>
      <Subtitle>Keyboard Key</Subtitle>
      <ControlImage src={ImageControl} alt='control-image' />
    </ControlContainer1>
  );

export default Controls;
