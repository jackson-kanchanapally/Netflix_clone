import React from "react";
import * as ROUTES  from "../constants/routes";
import {Header} from "../components";
import Logo from "../logo.svg"
export function HeaderContainer({children}){
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src={Logo} alt="Netflix"/>
                <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}