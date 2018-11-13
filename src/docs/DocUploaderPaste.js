import React, { Component } from 'react';
import swal from 'sweetalert2';
import Doc from './Doc';
import { UploaderPaste } from 'fdns-ui-react';

class DocUploaderPaste extends Component {
  constructor(props) {
    super(props);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload(file) {
    swal('Upload', `The upload has been triggered! Your file size is ${file.size} bytes.`, 'success');
  }

  render() {
    const sampleComponent = (
      <UploaderPaste onUpload={this.handleUpload} />
    );
    const sampleCode = "<UploaderPaste />";
    const sampleProps = [
      {
        propName: 'placeholder',
        propType: 'string',
        defaultProp: 'Paste here...',
        desc: 'This is the placeholder text in the paste textarea.'
      },{
        propName: 'prefix',
        propType: 'string',
        defaultProp: 'pasted-text-',
        desc: 'This is the prefix for the filename that gets generated onUpload.'
      },{
        propName: 'onUpload',
        propType: 'func',
        defaultProp: 'function(){}',
        desc: 'This gets triggered when text is pasted in and the action button has been clicked.'
      },{
        propName: 'resetOnUpload',
        propType: 'bool',
        defaultProp: 'true',
        desc: 'This property determines if the textarea should reset or not when an upload is triggered.'
      }
    ];

    return (
      <Doc id="DocUploaderPaste"
           tag="<UploaderPaste>"
           desc="The UploaderPaste component is used to paste in text and receive a text/plain file back."
           sampleCode={sampleCode}
           sampleComponent={sampleComponent}
           sampleProps={sampleProps} />
    );
  }
}

export default DocUploaderPaste;
