import React, { Component } from 'react';
import swal from 'sweetalert2';
import Doc from './Doc';
import { OptionExport } from 'fdns-ui-react';

class DocOptionExport extends Component {
  handleExport = (type) => {
    swal('Option Export', `The export option has been clicked with the "${type}" data type.`);
  }

  render() {
    const sampleComponent = (
      <OptionExport onExport={this.handleExport} />
    );
    const sampleCode = '<OptionExport />';
    const sampleProps = [
      {
        propName: 'onExport',
        propType: 'func',
        defaultProp: 'function(){}',
        desc: 'This method is called when an export option is seleceted.'
      }
    ];

    return (
      <Doc id="DocOptionExport"
           tag="<OptionExport>"
           desc="The OptionExport is a component to make it easy to export data types from a data table."
           sampleCode={sampleCode}
           sampleComponent={sampleComponent}
           sampleProps={sampleProps} />
    );
  }
}

export default DocOptionExport;
