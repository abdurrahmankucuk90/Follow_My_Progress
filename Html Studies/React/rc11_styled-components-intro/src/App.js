import Button, { TomatoButton } from "./components/Button.styled";
import Container from "./components/Container.styled";
import HeaderText from "./components/Header.styled";
import StyledLink from "./components/Link.styled";

const App = () => {
  return (
    <Container bg="green">
      <HeaderText>Styled-Components</HeaderText>
      <Button primary>Click</Button>
      <Button>Click</Button>
      <TomatoButton primary> Click </TomatoButton>
      <TomatoButton> Click </TomatoButton>
      <HeaderText color="white">Styled-Components</HeaderText>

      <StyledLink href="https://www.clarusway.com" target="_blank">
        Clarusway
      </StyledLink>
      <StyledLink secondary href="https://www.clarusway.com" target="_blank">
        Clarusway
      </StyledLink>
      {/* <Button/> */}
    </Container>
  );
};

export default App;
