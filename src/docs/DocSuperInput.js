import React, { Component } from 'react';
import Doc from './Doc';
import { SuperInput } from 'fdns-ui-react';

class DocSuperInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    const sampleComponent = (
      <SuperInput onChange={this.onChange} value={this.state.value} />
    );
    const sampleCode = '<SuperInput onChange={this.onChange} value={this.state.value} />';
    const sampleProps = [
      {
        propName: 'label',
        propType: 'string',
        defaultProp: 'My Label',
        desc: 'This is the label for the input.',
      },{
        propName: 'type',
        propType: 'string',
        defaultProp: null,
        desc: 'This is the type for the input such as text, password, etc.',
      },{
        propName: 'value',
        propType: 'string',
        defaultProp: '""',
        desc: 'This is the value for the input which should be bound to your state.',
      },{
        propName: 'placeholder',
        propType: 'string',
        defaultProp: 'Placeholder',
        desc: 'This is the placeholder text for the input.',
      },{
        propName: 'onChange',
        propType: 'func',
        defaultProp: 'function(){}',
        desc: 'This is the function that is called when the input is changed, use this to update your state.',
      }
    ];

    return (
      <Doc id="DocSuperInput"
           tag="<SuperInput>"
           desc="The SuperInput is used to collect information from a form."
           sampleCode={sampleCode}
           sampleComponent={sampleComponent}
           sampleProps={sampleProps} />
    );
  }
}

export default DocSuperInput;
