import { useState } from 'react';
import styled from 'styled-components';

import Logo from './components/Logo';
import DownloadButton from './components/DownloadButton';
import PlayButton from './components/PlayButton';
import Header from './components/Header';
import CloseButton from './components/CloseButton';
import SplineScene from './components/SplineScene';
import { Wrapper, TextContainer, Title, Description, ButtonContainer, GradientLine, ControlContainer1, Subtitle, ControlImage, ContentWrapper, Container, SplineContainer, } from './utils/StyledComponents';
import DownloadFile from './smart_home_final.spline.zip';
import ImageControl from './images/controls.png';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper className='App'>
      <Logo />
      <ContentWrapper>
        <Container>
          <TextContainer>
            <Title>3D Room with Game Controls</Title>
            <Description>
              Learn how to create a 3D scene in Spline with game interactions like moving, jumping, mouse
              events and dark mode state.
            </Description>
          </TextContainer>
          <ButtonContainer>
            <DownloadButton file={DownloadFile} />
            <PlayButton onClick={() => setIsOpen(true)} />
          </ButtonContainer>
          <GradientLine />
          <ControlContainer1>
            <Subtitle>Keyboard Key</Subtitle>
            <ControlImage src={ImageControl} alt='control-image' />
          </ControlContainer1>
        </Container>
        <SplineContainer isOpen={isOpen}>
          <Header />
          <CloseButton isOpen={isOpen} onClick={() => setIsOpen(false)} />
          <SplineScene />
        </SplineContainer>
      </ContentWrapper>
    </Wrapper>
  );
};
export default App;
