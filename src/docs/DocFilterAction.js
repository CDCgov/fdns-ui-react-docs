import React, { Component } from 'react';
import swal from 'sweetalert2';
import Doc from './Doc';
import { FilterAction } from 'fdns-ui-react';

class DocFilterAction extends Component {
  constructor(props) {
    super(props);
    this.handleApply = this.handleApply.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleApply() {
    swal('Apply Click', 'The apply click has been triggered!', 'success');
  }

  handleReset() {
    swal('Reset Click', 'The reset click has been triggered!', 'success');
  }

  render() {
    const sampleComponent = (
      <FilterAction onApply={this.handleApply} onReset={this.handleReset} />
    );
    const sampleCode = "<FilterAction onApply={this.handleApply} onReset={this.handleReset} />";
    const sampleProps = [
      {
        propName: 'onApply',
        propType: 'func',
        defaultProp: null,
        desc: 'This event is triggered when the apply button is clicked.'
      },{
        propName: 'onReset',
        propType: 'func',
        defaultProp: null,
        desc: 'This event is triggered when the reset button is clicked.'
      }
    ];

    return (
      <Doc id="DocFilterAction"
           tag="<FilterAction>"
           desc="The FilterAction component is used to trigger an action, usually used in FilterGroup."
           sampleCode={sampleCode}
           sampleComponent={sampleComponent}
           sampleProps={sampleProps} />
    );
  }
}

export default DocFilterAction;
