import styled from "styled-components";

const Container = styled.div`
  background: ${({ bg }) => bg || "white"};
  /* background: ${(props) => props.bg || "white"}; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.7rem;
  width: auto;
  padding: 1rem;
`;

export default Container;
