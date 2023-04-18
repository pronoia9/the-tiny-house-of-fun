import "./styles.css";
import React from "react";
import styled from "styled-components";

export default function App() {
  return (
    <Wrapper className="App">
      Welcome to Section 9: Export in React Site
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;
