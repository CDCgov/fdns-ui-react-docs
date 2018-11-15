import React, { Component } from 'react';
import swal from 'sweetalert2';
import Doc from './Doc';
import { OptionErrorsWarnings, fixtures } from 'fdns-ui-react';
const { errors, warnings } = fixtures;
const defaultAnalysis = {
  valid: true,
  warnings: 0,
  explanation: [],
  errors: 0
};
const analysis = {
  valid: true,
  warnings: warnings.length,
  explanation: Object.assign(errors, warnings),
  errors: errors.length,
};

class DocOptionErrorsWarnings extends Component {
  constructor(props) {
    super(props);
    this.updateErrorsWarnings = this.updateErrorsWarnings.bind(this);
  }

  updateErrorsWarnings(errors, warnings) {
    swal('Update Triggered', 'Please check the console for the errors and warnings object that were returned.', 'success');
    console.log('UPDATE_ERRORS_WARNINGS:');
    console.log({
      errors,
      warnings,
    });
  }

  render() {
    const sampleComponent = (
      <OptionErrorsWarnings analysis={analysis}
                            updateErrorsWarnings={this.updateErrorsWarnings} />
    );
    const sampleCode = '<OptionErrorsWarnings analysis={analysis} />';
    const sampleProps = [
      {
        propName: 'analysis',
        propType: '[_analysis](#ShapeAnalysis)',
        defaultProp: JSON.stringify(defaultAnalysis),
        desc: 'This is the analysis data that you pass with errors and warnings. Please see the [_analysis](#ShapeAnalysis) shape for more information.'
      },{
        propName: 'onDetail',
        propType: 'func',
        defaultProp: 'function(){}',
        desc: 'This gets called when either a warning or error button is clicked.'
      },{
        propName: 'updateErrorsWarnings',
        propType: 'func',
        defaultProp: null,
        desc: 'This is a function that can be passed to return an array of errors and warnings.\n```javascript\nfunction (errors, warnings) {\n  console.log(errors, warnings);\n}\n```'
      }
    ];

    return (
      <Doc id="DocOptionErrorsWarnings"
           tag="<OptionErrorsWarnings>"
           desc="The OptionErrorsWarnings component is used to give an action button."
           sampleCode={sampleCode}
           sampleComponent={sampleComponent}
           sampleProps={sampleProps} />
    );
  }
}

export default DocOptionErrorsWarnings;