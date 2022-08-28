import React from "react";
import Button from "./styles/Button.styled";
import Container from "./styles/Container.styled";
import Flex from "./styles/Flex.styled";
import StyledHeader, { Image, Logo, Nav } from "./styles/Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.png"></Logo>
          <div>
            <Button color="#A62440">Apply Courses</Button>
            <Button bg="#A62440">Talk to Adviser</Button>
          </div>
        </Nav>
        <Flex>
          <div>
            <h1>The IT Career of Your Dreams Starts Here!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ab
              dolor voluptas autem voluptatibus at aperiam? Incidunt dolor ipsum
              fuga animi ut velit ducimus atque, possimus, soluta distinctio
              vero quaerat rem saepe perferendis exercitationem maiores modi
              magnam omnis deserunt nostrum.
            </p>
            <Button bg="#A62440">Start Your New Carier</Button>
          </div>
          <Image src="./images/hero.jpg"></Image>
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
