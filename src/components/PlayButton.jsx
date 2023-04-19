import './PlayButton.scss';

const PlayButton = ({ onClick }) => (
  <div className='play-button__wrapper' onClick={onClick}>
    <div className='play-button__container'>
      <div className='play-button__circle'>
        <div className='play-button__circle-mini' />
      </div>
      <p className='play-button__title'>Play Game</p>
    </div>
  </div>
);

export default PlayButton;
