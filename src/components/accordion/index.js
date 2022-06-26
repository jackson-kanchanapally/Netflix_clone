import react,{useState,useContext,createContext} from "react";
import {Container,Frame,Title,Item,Inner,Header,Body} from './styles/accordion'
const ToggleContext=createContext()
export default function Accordion({children,...restProps})
{
    return (
        <Container {...restProps}>
            {children}
            </Container>
    )
}
Accordion.Title=function AccordionTitle({children,...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Accordion.Frame=function AccordionFrame({children,...restProps}){
    return <Frame {...restProps}>{children}</Frame>
}
Accordion.Item=function AccordionItem({children,...restProps}){
    const [show,setShow]=useState(false);
    return (
        <ToggleContext.Provider value={{show,setShow}}>
    <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
    )
}
Accordion.Header=function AccordionHeader({children,...restProps}){
    const {show,setShow}=useContext(ToggleContext)
    return (
    <Header onClick={()=>setShow((show)=>!show)} {...restProps}>{children}
    {show?(<img src="/images/icons/close-slim.png" alt="close"></img>):(<img src="images/icons/add.png" alt="open"></img>)}</Header>
    )
}
Accordion.Body=function AccordionBody({children,...restProps}){
    const {show} =useContext(ToggleContext)
    return show&&<Body {...restProps}>{children}</Body>
}