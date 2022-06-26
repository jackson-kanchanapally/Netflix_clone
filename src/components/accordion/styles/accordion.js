import styled from "@emotion/styled";

export const Container=styled.div`
display:flex;
border-bottom:8px solid #222;
flex-direction:column;
padding:50px 20%;
`;
export const Item=styled.div`
color:white;
margin-bottom:10px;
&:first-of-type{
    margin-top:3rem;
}
`;
export const Header=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
cursor:pointer;
user-select:none;
margin-bottom:3px;
font-size:26px;
font-weight:normal;
background:#303030;
padding : 0.8em 1.2em;
width:80%;
margin-left:50px;
img {
    filter:brightness(0) invert(1);
    width:24px;

    @media(max-width:600px)
    {
        width:16px;
    }
}
@media (max-width:600px)
{
    margin-left:-80px;
    width:85vw;
}
`;
export const Body=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
cursor:pointer;
margin-top:-1px;

font-size:26px;
font-weight:normal;
background:#303030;
padding : 0.8em 1.2em;
width:80%;
margin-left:50px;
@media (max-width:600px)
{
    margin-left:-80px;
    width:85vw;
}
`;
export const Frame=styled.div`
margin-bottom:40px;
`;
export const Inner=styled.div`
display:flex;
padding:70px 45px;
flex-direction:column;
max-width:815px;
margin:auto
`;
export const Title=styled.h1`
font-size:49px;
line-height:1;
margin-top:0;
margin-bottom:-60px;
color:white;
text-align:center;

@media (max-width:600px){
    font-size:35px;
}

`;
