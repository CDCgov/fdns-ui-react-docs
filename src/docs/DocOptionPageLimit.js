import React, { Component } from 'react';
import swal from 'sweetalert2';
import Doc from './Doc';
import { OptionPageLimit } from 'fdns-ui-react';

class DocOptionPageLimit extends Component {
  handleChange = (selected) => {
    swal('Option Page Limit', `The page limit option has been changed with the "${selected}" option.`);
  }

  render() {
    const sampleComponent = (
      <OptionPageLimit onChange={this.handleChange} />
    );
    const sampleCode = '<OptionPageLimit />';
    const sampleProps = [
      {
        propName: 'limits',
        propType: 'arrayOf(number)',
        defaultProp: '[10, 25, 50, 100]',
        desc: 'This is the limit options that are available in the component.'
      },{
        propName: 'defaultLimitIndex',
        propType: 'number',
        defaultProp: '1',
        desc: 'This is the index of the option that is selected when the component is created.'
      },{
        propName: 'onChange',
        propType: 'func',
        defaultProp: 'function(){}',
        desc: 'This method is called when a page limit option is changed.'
      }
    ];

    return (
      <Doc id="DocOptionPageLimit"
           tag="<OptionPageLimit>"
           desc="The OptionPageLimit is a component to make it easy change page limit options in a data view."
           sampleCode={sampleCode}
           sampleComponent={sampleComponent}
           sampleProps={sampleProps} />
    );
  }
}

export default DocOptionPageLimit;
