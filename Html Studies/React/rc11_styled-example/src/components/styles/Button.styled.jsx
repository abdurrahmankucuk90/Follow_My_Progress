import styled from 'styled-components';
// #A62440
const Button = styled.button`
background-color :${({bg}) => bg || 'white'};
color :${({color}) => color || 'white'};
border: 1px solid #A62440;
border-radius: 5px;
box-shadow: 2px 2px 10px rgba(0,0,0,0.4);
padding: 1rem 1.3rem;
font-size: 1.1rem;
margin-right: 0.5rem;
cursor: pointer;
&:hover{
    opacity: .9;
    transform: scale(.95);
}


`;

export default Button;
