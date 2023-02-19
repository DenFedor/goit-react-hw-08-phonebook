import styled from "styled-components";
export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 15px;
`
export const InputWrap =styled.div`
display: inline-flex;
flex-direction: column;
gap: 15px;
align-items: center;
min-width: 300px;
padding: 15px ;

border: 2px solid #fff;
border-radius: 10px;
border-color: #fff;
border-image: linear-gradient(-45deg, #3498db, #e67e22) 1;
`
export const Label =styled.label`
text-align:left;    
font-size: 16px;
font-weight: 700;
`

export const Input =styled.input`
margin-top: 10px;
display: block;
border: 1px solid gray;
border-radius: 5px;
text-align: center;
height: 25px;
width: 300px;
font-size: 14px;
font-weight: 600;`