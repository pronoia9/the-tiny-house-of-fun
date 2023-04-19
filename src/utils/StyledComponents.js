import styled from 'styled-components';
import * as TextStyles from './TextStyles';

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const TextContainer = styled.div`
  display: grid;
  gap: 24px;
  max-width: 460px;
  padding: 225px 0px 0px 56px;
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
`;

const GradientLine = styled.div`
  width: 100%;
  height: 48px;
  background: linear-gradient(185deg, rgba(0, 0, 0, 0.2) 0%, rgba(255, 255, 255, 0) 50%);
`;

const ControlContainer1 = styled.div`
  display: block;
`;

const Subtitle = styled(TextStyles.BodyMain)`
  color: rgba(0, 0, 0, 0.6);
  margin-top: 14px;
  padding-left: 56px;
`;

const ControlImage = styled.img`
  max-width: 326px;
  padding: 14px 0px 0px 56px;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 855px;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`;

const Container = styled.div`
  position: relative;
`;

export {
  Wrapper,
  TextContainer,
  Title,
  Description,
  ButtonContainer,
  GradientLine,
  ControlContainer1,
  Subtitle,
  ControlImage,
  ContentWrapper,
  Container,
};