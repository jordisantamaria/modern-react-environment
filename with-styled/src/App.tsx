import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled, {ThemeProvider} from "styled-components";
import theme from "./theme/theme";

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

// pass props in styled and use them
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props: { primary?: boolean }) => props.primary ? "palevioletred" : "white"};
  color: ${(props: { primary?: boolean }) => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// extend styled component to create a variant
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const ThemeButton = styled.button`
  color: ${props => props.theme.colors.primaryLight};
  border: 2px solid ${props => props.theme.colors.primaryDark};
  background: ${props => props.theme.colors.primary};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

// With javascript objects css
const Box = styled.div({
    backgroundColor: 'palevioletred',
    height: '50px',
    width: '50px'
});

function App() {
  return (
      <ThemeProvider theme={theme}>
          <Wrapper>
            <Title>
              Hello World!
            </Title>
              <div>
                  <Button>Normal</Button>
                  <Button primary>Primary</Button>
                  <TomatoButton style={{margin: '40px'}}>Tomato Button</TomatoButton>
                  <ThemeButton>Themed button</ThemeButton>
              </div>
          </Wrapper>
      </ThemeProvider>
  );
}

export default App;
