import React, { Component } from 'react';
import swal from 'sweetalert2';
import Doc from './Doc';
import { SuperButton } from 'fdns-ui-react';

class DocSuperButton extends Component {
  handleClick = (e) => {
    swal('SuperButton', 'Testing the SuperButton click event.');
  }

  render() {
    const sampleComponent = (
      <div className="super-buttons">
        <SuperButton btnStyle="grey" onClick={this.handleClick} />
        <SuperButton btnStyle="blue" onClick={this.handleClick} />
      </div>
    );
    const sampleCode = "<SuperButton />";
    const sampleProps = [
      {
        propName: 'label',
        propType: 'string',
        defaultProp: 'Super Button',
        desc: 'This is the label for the button.',
      },{
        propName: 'btnStyle',
        propType: 'oneOf([\'grey\', \'blue\'])',
        defaultProp: 'grey',
        desc: 'This is the style for the button either grey or blue.',
      },{
        propName: 'className',
        propType: 'string',
        defaultProp: null,
        desc: 'This is additional class option for the button.',
      },{
        propName: 'icon',
        propType: 'string',
        defaultProp: null,
        desc: 'This is a base64 representation of the image for an icon.',
      },{
        propName: 'iconAlt',
        propType: 'string',
        defaultProp: null,
        desc: 'This is the alt text for the icon.',
      },{
        propName: 'onClick',
        propType: 'func',
        defaultProp: 'function(){}',
        desc: 'This is the method that is called when the button is clicked.',
      }
    ];

    return (
      <Doc id="DocSuperButton"
           tag="<SuperButton>"
           desc="The SuperButton component is a larger button to be used for forms."
           sampleCode={sampleCode}
           sampleComponent={sampleComponent}
           sampleProps={sampleProps} />
    );
  }
}

export default DocSuperButton;
