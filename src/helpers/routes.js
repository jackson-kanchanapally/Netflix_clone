import React from "react";
import {Route,Navigate} from 'react-router-dom'
export function IsUserRedirect({user,loggedInPath,children,...rest})
{
    return (
        <Route
          {...rest}
          render={() => {
            if (!user) {
              return children;
            }
    
            if (user) {
              return (
                <Navigate
                  to={{
                    pathname: loggedInPath,
                  }}
                />
              );
            }
    
            return null;
          }}
        />
      );
}