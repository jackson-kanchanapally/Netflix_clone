import styled from "styled-components/macro";

export const Container=styled.div`
display:flex;
justify-content:center;
height:100%;
margin-top:20px;
margin-bottom:120px;
flex-wrap:wrap;
padding-bottom:50px;
align-items:center;
@media (max-width:1000px){
    flex-direction:row;
    align-items:center;
    margin: 15% auto;
    width:100vw;
    padding-bottom:30px;
    align-items:center;
}
`;
export const Input=styled.input`
max-width:480px;
width:100%;
border:0;
padding:10px;
height:65px;
box-sizing:border-box;
@media(max-width:600px)
{
width:90vw;
height:40px;
}
`;
export const Button=styled.button`
display:flex;
align-items:center;
height:65px;
background:#e50914;
color:white;
padding:6px 32px;
font-size:30px;
border:0;
cursor:pointer;
img{
    padding-left:9px;
    width:24px;
    filter:brightness(0) invert(1);
}
@media(max-width:600px)
{
    padding:0px 22px;
    margin-top:15px;
    margin-bottom:-25px;
width:38vw;
height:40px;
font-size:15px;
line-height:4px;
img{
    padding-left:10px;
    width:15px;
    filter:brightness(0) invert(1);
}
}
`;
export const Text=styled.p`
color:white;
font-size:20px;
text-align:center;
@media(max-width:600px){
 
    font-size:19px;
}
`;
export const Break=styled.p`
flex-basis:100%;
height:0;
margin-bottom:0px;
`;