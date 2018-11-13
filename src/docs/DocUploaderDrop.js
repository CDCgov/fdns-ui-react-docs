import React, { Component } from 'react';
import Doc from './Doc';
import { UploaderDrop } from 'fdns-ui-react';

class DocUploaderDrop extends Component {
  render() {
    const sampleComponent = (
      <UploaderDrop />
    );
    const sampleCode = "<UploaderDrop />";
    const sampleProps = [
      {
        propName: 'accept',
        propType: 'string',
        defaultProp: 'text/plain',
        desc: 'This is the MIME type or file extension that is accepted by the drop zone. Please review [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#Attributes) for acceptable formats.'
      },{
        propName: 'layout',
        propType: 'string',
        defaultProp: 'default',
        desc: 'This is allows you to pass a different layout for the drop uploader. Value should either be default or button.'
      },{
        propName: 'onDrop',
        propType: 'func',
        defaultProp: 'function(){}',
        desc: 'This gets triggered when a file is sent to the uploader. The function contains `acceptedFiles, rejectedFiles` in the signature.'
      }
    ];

    return (
      <Doc id="DocUploaderDrop"
           tag="<UploaderDrop>"
           desc="The UploaderDrop component is used to drop files into a drop zone and then display the files in a list or select from a file input."
           sampleCode={sampleCode}
           sampleComponent={sampleComponent}
           sampleProps={sampleProps} />
    );
  }
}

export default DocUploaderDrop;
