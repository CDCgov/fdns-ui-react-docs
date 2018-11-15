import React, { Component } from 'react';
import Doc from './Doc';
import { OptionView } from 'fdns-ui-react';

class DocOptionView extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(selected) {
    console.log(`View selection changed to ${selected}`);
  }

  render() {
    const sampleComponent = (
      <OptionView onChange={this.handleChange} />
    );
    const sampleCode = '<OptionView onChange={this.handleChange} />';
    const sampleProps = [
      {
        propName: 'selected',
        propType: 'string',
        defaultProp: 'super-table',
        desc: 'This is the default value for the selected view type, either super-table or super-grid.'
      },{
        propName: 'onChange',
        propType: 'func',
        defaultProp: null,
        desc: 'This event is triggered when a view selection is changed.'
      }
    ];

    return (
      <Doc id="DocOptionView"
           tag="<OptionView>"
           desc="The OptionView is used to switch between different view styles, such as between SuperTable and SuperGrid."
           sampleCode={sampleCode}
           sampleComponent={sampleComponent}
           sampleProps={sampleProps} />
    );
  }
}

export default DocOptionView;
