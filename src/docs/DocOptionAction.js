import React, { Component } from 'react';
import swal from 'sweetalert2';
import Doc from './Doc';
import { OptionAction } from 'fdns-ui-react';

class DocOptionAction extends Component {
  constructor(props) {
    super(props);
    this.handleDetail = this.handleDetail.bind(this);
    this.handleOption = this.handleOption.bind(this);
  }

  handleDetail() {
    swal('Detail Click', 'The detail click has been triggered!', 'success');
  }

  handleOption() {
    swal('Option Click', 'The option click has been triggered!', 'success');
  }

  render() {
    const sampleComponent = (
      <OptionAction showDetail={true}
                    showOption={true}
                    onDetail={this.handleDetail}
                    onOption={this.handleOption} />
    );
    const sampleCode = '<OptionAction showDetail={true} showOption={true} />';
    const sampleProps = [
      {
        propName: 'showDetail',
        propType: 'bool',
        defaultProp: 'true',
        desc: 'This is a simple switch to show the detail button or not.'
      },{
        propName: 'showOption',
        propType: 'bool',
        defaultProp: 'false',
        desc: 'This is a simple switch to show the option button or not.'
      },{
        propName: 'onDetail',
        propType: 'func',
        defaultProp: 'function(){}',
        desc: 'This gets triggered when the detail button is clicked.'
      },{
        propName: 'onOption',
        propType: 'func',
        defaultProp: 'function(){}',
        desc: 'This gets triggered when the option button is clicked.'
      }
    ];

    return (
      <Doc id="DocOptionAction"
           tag="<OptionAction>"
           desc="The OptionAction component is used to give an action button or an option button typically used in table rows or grid cells."
           sampleCode={sampleCode}
           sampleComponent={sampleComponent}
           sampleProps={sampleProps} />
    );
  }
}

export default DocOptionAction;