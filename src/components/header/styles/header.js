import styled from "styled-components";
import {Link as ReactRouterLink} from 'react-router-dom'

export const Background=styled.div`
display:flex;
height:100vh;
padding-top:10px;
flex-direction:column;
border-bottom:8px solid #222;
background:url(${({src})=>(src?'../images/misc/${src}.jpg': '../images/misc/home-bg.jpg')}) top left /cover no-repeat;

@media (max-width:600px)
{
    height:50%;
    padding-bottom:25px;
}
`;

export const Frame=styled.div`

`;

export const Container=styled.div`
display:flex;
margin:0 56px;
height:64px;
padding:18px 0px;
justify-content:space-between;
align-items:center;

a{
    display:flex;
}

@media(max-width:1000px)
{
    margin:0 30px;
}
`;

export const Logo=styled.img`
height:32px;
width:100px;
margin-right:40px;

@media (min-width:1449px)
{
    height :45px;
    width:167px;
}
`;

export const ButtonLink=styled(ReactRouterLink)`
display:block;
background-color:#e50914;
width:84px;
height:fit-content;
color:white;
border:0;
font-size:15px;
border-radius:3px;
padding 8px 17px;
cursor:pointer;
text-decoration:none;
box-sizing:border-box;
&:hover{
    background-color:#f40612;
 }
`;