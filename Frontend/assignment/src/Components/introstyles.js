import styled from "styled-components";

export const Input= styled.input`
width: 300px;
height: 20px;
// padding-left: 10px;
border: none;
margin-top:auto;
`;

export const Wrapper= styled.div`
border-radius: 50px;
width: 500px;
height: 60px;
background: white;
border: 3px solid #969191;
padding-left: 10px;
&:hover {
    border-color:  #001EB9;
  }

`;

export const SearchButton= styled.button`
    color: white;
    font-weight: 700;
    font-size: 19px;
  margin: 10px;
  padding: 5px 40px;
  border: 2px solid #001EB9;
  border-radius: 50px;
  background: #001EB9;
`;
   
