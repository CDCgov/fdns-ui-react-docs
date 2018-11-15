import React, { Component } from 'react';
import swal from 'sweetalert2';
import Doc from './Doc';
import { DropdownUser } from 'fdns-ui-react';

const defaultUser = {
  "firstName": "First",
  "lastName": "Last",
  "email": "abc1@my.org",
  "avatar": "http://placehold.it/80x80.png",
  "org": "ABC/DEF/XYZ",
};

class DocDropdownUser extends Component {
  handleSignOut = (e) => {
    swal('Sign Out', 'Sign out button clicked!');
  }

  render() {
    const sampleComponent = (
      <div className="text-right">
        <DropdownUser onSignOut={this.handleSignOut} />
      </div>
    );
    const sampleCode = "<DropdownUser user={user} />";
    const sampleProps = [
      {
        propName: 'user',
        propType: '[_user](#ShapeUser)',
        defaultProp: JSON.stringify(defaultUser),
        desc: 'This is the user object that is passed to the component.'
      },{
        propName: 'onSignOut',
        propType: 'func',
        defaultProp: 'function(){}',
        desc: 'This gets called when the logout button is clicked.'
      }
    ];

    return (
      <Doc id="DocDropdownUser"
           tag="<DropdownUser>"
           desc="The Dropdown User component is used to display information about the user in the header."
           sampleCode={sampleCode}
           sampleComponent={sampleComponent}
           sampleProps={sampleProps} />
    );
  }
}

export default DocDropdownUser;
