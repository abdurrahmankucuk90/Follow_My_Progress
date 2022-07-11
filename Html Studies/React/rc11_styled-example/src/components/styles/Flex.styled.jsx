import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  align-items: center;
  & > div {
    /*! Tum elemanlarin buyumesin izin ver */
    flex-grow: 1;
    /* Tum div'lerin esit miktarda alan tutabilmesine izin var */
    flex-basis: 0;
  }
  column-gap: .5rem;
  @media (max-width: ${({ theme }) => theme.responsive}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default Flex;
