import { useState } from 'react';

import { CloseButton, Controls, DownloadButton, Header, Logo, PlayButton, SplineScene } from './components';
import { Wrapper, TextContainer, Title, Description, ButtonContainer, GradientLine, ContentWrapper, Container, SplineContainer, } from './utils/StyledComponents';
import DownloadFile from './files/the_tiny_house_of_fun.spline.zip';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper className='app__wrapper'>
      <Logo className='logo__component' />
      <ContentWrapper className='app__content__wrapper' >
        <Container className='app__container'>
          <TextContainer className='text__container'>
            <Title className='text__title'>3D Room with Game Controls</Title>
            <Description className='text__description'>
              Learn how to create a 3D scene in Spline with game interactions like moving, jumping, mouse
              events and dark mode state.
            </Description>
          </TextContainer>

          <ButtonContainer className='buttons__container'>
            <DownloadButton file={DownloadFile} />
            <PlayButton onClick={() => setIsOpen(true)} />
          </ButtonContainer>

          <GradientLine className='gradient__line' />

          <Controls mobile={false} />
        </Container>

        <SplineContainer className='spline__container' isOpen={isOpen}>
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
