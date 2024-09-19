import React from 'react'

function Auth(props) {
    const pass='12345';
    if(pass!=='12345'){
        return <h4>you are not authorised</h4>
    }else{
        return props.children
    }
  
}

export default Auth