import { Form } from "formik";
import styled from "styled-components";

export const FormStyled = styled(Form)`
display: flex;
flex-direction: column;
max-width: 45%;
gap: 1.5rem;
`;

export const FormContactStyled = styled(Form)`
display: flex;
flex-direction: column;
max-width: 55%;
gap: 1.5rem;
`;

export const ContactTextarea = styled.textarea`
`

export const InputStyled = styled.input`
width: 100%;
height: 42px;
padding: 0 0.5rem;
border:  0.5px solid #0000004c 

`;

export const ErrorStyled = styled.span`
	position: relative;
    bottom: -10px;
    color: red
`;

