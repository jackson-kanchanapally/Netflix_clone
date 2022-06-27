import styled from "styled-components/macro";

export const Container=styled.div`
display:flex;
flex-direction:column;
border-bottom : 8px solid solid #222;
text-align:center;
padding-top:150px;
@media (max-width:600px)
{
    margin-bottom:-60px;
    padding-top:50px;
}
`;

export const Title=styled.h1`
color:white;
max-width:640px;
font-size:60px;
font-weight:550;
margin:auto;
text-align:center;

@media(max-width:600px){
    font-size:28px;
}
`;

export const SubTitle=styled.h2`
color:white;
font-size:26px;
font-weight:normal;
margin:16px auto;
text-align:center;
@media(max-width:600px){
    font-size:18px;
}
`;
