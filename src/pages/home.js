import React from "react";
import {HeaderContainer} from '../container/header'
import { FaqsContainer } from '../container/faqs';
import { FooterContainer } from '../container/footer';
import { JumbotronContainer } from '../container/jumbotron';
import { Feature,OptForm } from "../components";
export default function Home(){
    return (
        <>
       <HeaderContainer>
        <Feature>
       <Feature.Title>Unlimited movies, TV shows and more.</Feature.Title> 
       <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
        </Feature>
        <OptForm>
        <OptForm.Text>
                    Ready to watch? Enter your email to create or restart your membership
                </OptForm.Text>
                <OptForm.Break/>
            <OptForm.Input placeholder="Email address"/>
           <OptForm.Button>Get Started</OptForm.Button>
        </OptForm>
       </HeaderContainer>
       <JumbotronContainer/>
        <FaqsContainer/>
        <FooterContainer/>
       
        </>
    )
}