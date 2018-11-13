import React, { Component } from 'react';
import swal from 'sweetalert2';
import Doc from './Doc';
import { DataInspector, fixtures } from 'fdns-ui-react';
const { messages } = fixtures;
const data = messages.slice(0)[0];
data.total = 100;
data.isUser = true;
data.isAdmin = null;

class DocDataInspector extends Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    swal('Close Click', 'The close click has been triggered!', 'success');
  }

  render() {
    const sampleComponent = (
      <DataInspector data={data} onClose={this.handleClose} />
    );
    const sampleCode = "<DataInspector data={data} onClose={this.handleClose} />";
    const sampleProps = [
      {
        propName: 'data',
        propType: 'object',
        defaultProp: '{}',
        desc: 'This is the object that is inspected.'
      },{
        propName: 'onClose',
        propType: 'func',
        defaultProp: null,
        desc: 'This is the method that is called when the close button is clicked.'
      },{
        propName: 'showPrint',
        propType: 'bool',
        defaultProp: 'true',
        desc: 'This is an option to display the print button or not.'
      },{
        propName: 'onPrint',
        propType: 'func',
        defaultProp: null,
        desc: 'This is the override method for onPrint.'
      }
    ];

    return (
      <Doc id="DocDataInspector"
           tag="<DataInspector>"
           desc="The DataInspector component is used to get a detailed view of JSON data with a built-in search."
           sampleCode={sampleCode}
           sampleComponent={sampleComponent}
           sampleProps={sampleProps} />
    );
  }
}

export default DocDataInspector;
