import React from "react";
import Button from "./styles/Button.styled";
import StyledHeader from "./styles/Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <Button color="#A62440">Apply Courses</Button>
        <Button bg="#A62440">Talk to Adviser</Button>
      </div>
    </StyledHeader>
  );
};

export default Header;
