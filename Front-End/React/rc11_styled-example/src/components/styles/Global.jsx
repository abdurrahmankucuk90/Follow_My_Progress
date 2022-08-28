import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
    }
    body{
        background-color: ${({ theme }) => theme.color.body};
        color: '#00252e';
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 1.1rem;
    }
    p{
        opacity: .6;
        line-height: 1.5;
    }
`;
