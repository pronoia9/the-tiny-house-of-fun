import { useState } from 'react';

import CloseButton from './components/CloseButton';
import Controls from './components/Controls';
import DownloadButton from './components/DownloadButton';
import Header from './components/Header';
import Logo from './components/Logo';
import PlayButton from './components/PlayButton';
import SplineScene from './components/SplineScene';
import DownloadFile from './files/the_tiny_house_of_fun.spline.zip';
import './App.scss';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='app__wrapper'>
      <Logo />

      <div className='app__content__wrapper'>
        <div className='app__container'>
          <div className='app__text__container'>
            <h1 className='app__title'>3D Room with Game Controls</h1>
            <p className='app__description'>
              Learn how to create a 3D scene in Spline with game interactions like moving, jumping, mouse
              events and dark mode state.
            </p>
          </div>

          <div className='button__container'>
            <DownloadButton file={DownloadFile} />
            <PlayButton onClick={() => setIsOpen(true)} />
          </div>

          <div className='gradient-line' />

          <Controls />
        </div>

        <div className={`spline__container${isOpen ? ' isOpen' : ''}`}>
          <Header />
          <CloseButton isOpen={isOpen} onClick={() => setIsOpen(false)} />
          <SplineScene />
        </div>

        <Controls />
      </div>
    </div>
  );
};

export default App;
