import React, { Component } from 'react';
import Doc from './Doc';
import { Uploader } from 'fdns-ui-react';

class DocUploader extends Component {
  render() {
    const sampleComponent = (
      <Uploader />
    );
    const sampleCode = "<Uploader />";
    const sampleProps = [
      {
        propName: 'checkDuplicates',
        propType: 'bool',
        defaultProp: 'true',
        desc: 'This is the option to prevent duplicated items or not.'
      },{
        propName: 'onError',
        propType: 'func',
        defaultProp: null,
        desc: 'This event is triggered when an error is found such as finding a duplicate.'
      }
    ];

    return (
      <Doc id="DocUploader"
           tag="<Uploader>"
           desc="The Uploader component is a combination of paste and drag and drop uploaders with a list to output the files."
           sampleCode={sampleCode}
           sampleComponent={sampleComponent}
           sampleProps={sampleProps} />
    );
  }
}

export default DocUploader;
