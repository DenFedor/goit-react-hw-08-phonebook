import styled from "styled-components";

export const ContactWrap=styled.div`
display: inline-flex;
flex-direction: column;
gap: 15px;
align-items: center;
min-width: 300px;
border: 2px solid #fff;
border-radius: 10px;
border-color: #fff;
border-image: linear-gradient(-45deg, #3498db, #e67e22) 1;
`
export const List=styled.ul`
display: flex;
flex-direction: column;
gap: 10px;
justify-content: center;
min-width: 296px;
`
export const Li=styled.li`
display: flex;
gap:5px;
align-items: center;
text-align: left;
font-size: 16px;
font-weight: 700;
`
export const DeleteBtn =styled.button`
transition: background 0.8s;
:hover {
  background: #47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%) center/15000%;
}
:active {
  background-color: #6eb9f7;
  background-size: 100%;
  transition: background 0s;
}
/* Button style */
  border: none;
  border-radius: 10px;
  padding: 6px 9px;
  font-size: 10px;
  width: fit-content;
  text-transform: uppercase;
  cursor: pointer;
  color: white;
  background-color: #2196f3;
  box-shadow: 0 0 4px #999;
  outline: none;
`