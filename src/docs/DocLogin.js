import React, { Component } from 'react';
import Doc from './Doc';
import { Login } from 'fdns-ui-react';

class DocLogin extends Component {
  render() {
    const sampleComponent = (
      <Login resetURL="#DocLogin"
             smartCardURL="#DocLogin"
             loginURL="#DocLogin"  />
    );
    const sampleCode = "<Login />";
    const sampleProps = [
      {
        propName: 'title',
        propType: 'string',
        defaultProp: 'FDNS Login',
        desc: 'This is the title for the Login.',
      },{
        propName: 'resetURL',
        propType: 'string',
        defaultProp: 'https://localhost:8443/reset-password',
        desc: 'This is the URL for the password reset.',
      },{
        propName: 'smartCardURL',
        propType: 'string',
        defaultProp: '/piv',
        desc: 'This is the URL for the PIV smart card route.',
      },{
        propName: 'loginURL',
        propType: 'string',
        defaultProp: '/login',
        desc: 'This is the URL for the login route.',
      }
    ];

    return (
      <Doc id="DocLogin"
           tag="<Login>"
           desc="The Login component is used to login a user."
           sampleCode={sampleCode}
           sampleComponent={sampleComponent}
           sampleProps={sampleProps} />
    );
  }
}

export default DocLogin;
