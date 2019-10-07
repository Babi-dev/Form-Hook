import React from "react";

import Form from "./components/Form";

import GlobalStyle from "./styles/Global";
import { Container, Content } from "./styles";

function App() {
  return (
    <Container className="App">
      <Content>
        <Form />
      </Content>
      <GlobalStyle />
    </Container>
  );
}
export default App;
