import styled from 'styled-components';
import * as TextStyles from './TextStyles';

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 855px;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1400px) {
    grid-template-columns: 1fr;
    align-content: center;
    padding-bottom: 40px;
  }
`;

const Container = styled.div`
  position: relative;
`;

const SplineContainer = styled.div`
  position: ${(props) => (props.isOpen ? 'fixed' : 'relative')};
  padding: ${(props) => (props.isOpen ? '0px' : '24px 20px 24px 0px')};

  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;

  .spline {
    border-radius: ${(props) => (props.isOpen ? '0px' : '20px')};
  }

  .closeButton {
    top: 54%;
    left: -32px;
  }

  @media (max-width: 1400px) {
    padding: ${(props) => (props.isOpen ? '0px' : '0px 20px 10px')};

    .closeButton {
      top: -44px;
      left: 50%;
      margin-left: -50px;
      transform: rotate(90deg);
    }
  }
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 44px;
  left: 0px;
`;

const TextContainer = styled.div`
  display: grid;
  gap: 24px;
  max-width: 460px;
  padding: 225px 0px 0px 56px;

  @media (max-width: 560px) {
    padding: 145px 20px 0px;
  }
`;

const Title = styled(TextStyles.H1)``;

const Description = styled.p`
  max-width: 360px;
  text-align: left;
  font-family: 'Inter', BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
  color: rgba(0, 0, 0, 0.6);
  margin: 0;
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: start;
  gap: 20px;
  background: linear-gradient(270deg, #f1f1f1 12.86%, rgba(255, 255, 255, 0) 83.72%);
  mix-blend-mode: normal;
  padding: 40px 0px 40px 56px;
  margin-top: 53px;

  a {
    text-decoration: none;
  }

  @media (max-width: 560px) {
    grid-template-columns: auto;
    justify-content: center;
    justify-items: center;
    align-content: center;
    padding: 32px 20px;
    margin-top: 40px;
  }
`;

const GradientLine = styled.div`
  width: 100%;
  height: 48px;
  background: linear-gradient(185deg, rgba(0, 0, 0, 0.2) 0%, rgba(255, 255, 255, 0) 50%);

  @media (max-width: 1400px) {
    display: none;
  }
`;

const ControlContainer1 = styled.div`
  display: block;
  @media (max-width: 1400px) {
    display: none;
  }
`;

const ControlContainer2 = styled.div`
  display: none;
  @media (max-width: 1400px) {
    display: block;
  }
`;

const Subtitle = styled(TextStyles.BodyMain)`
  color: rgba(0, 0, 0, 0.6);
  margin-top: 14px;
  padding-left: 56px;

  @media (max-width: 560px) {
    padding: 8px 20px;
  }
`;

const ControlImage = styled.img`
  max-width: 326px;
  padding: 14px 0px 0px 56px;

  @media (max-width: 560px) {
    padding: 8px 20px;
  }
`;

export {
  Wrapper,
  TextContainer,
  Title,
  Description,
  ButtonContainer,
  GradientLine,
  ControlContainer1,
  ControlContainer2,
  Subtitle,
  ControlImage,
  ContentWrapper,
  Container,
  SplineContainer,
};
