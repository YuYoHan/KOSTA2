import styled from "@emotion/styled";
import { keyframes, Keyframes } from "@emotion/react";

const Container = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }

  @ketframes App-logo-spin {
    from {
      tranform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const spinAnimation = keyframes`
    from {
        transform: rotate(0deg);
    } to {
        transform: rotate(360deg);
    }
`;

function App() {
  return (
    <>
      <AppLogo src="{logo}" alt="logo" />
      <Container>
        <Header>
          <h1>React App with Emotion</h1>
        </Header>
      </Container>
    </>
  );
}

export default App;
