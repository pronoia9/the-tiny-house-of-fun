import { useState } from 'react';
import styled from 'styled-components';

import { CloseButton, Controls, DownloadButton, Header, Logo, PlayButton, SplineScene } from './components';
import { Wrapper, TextContainer, Title, Description, ButtonContainer, GradientLine, ContentWrapper, Container, SplineContainer, } from './utils/StyledComponents';
import DownloadFile from './files/the_tiny_house_of_fun.spline.zip';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper className='app__wrapper'>
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

          <Controls mobile={false} />
        </Container>

        <SplineContainer isOpen={isOpen}>
          <Header />
          <CloseButton isOpen={isOpen} onClick={() => setIsOpen(false)} />
          <SplineScene />
        </SplineContainer>

        <Controls mobile={true} />
      </ContentWrapper>
    </Wrapper>
  );
};
export default App;
