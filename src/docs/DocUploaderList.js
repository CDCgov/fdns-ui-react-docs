import React, { Component } from 'react';
import Doc from './Doc';
import { UploaderList } from 'fdns-ui-react';

class DocUploaderList extends Component {
  render() {
    let files = [];
    const count = 50; 
    Array.apply(null, { length: count }).map((n, i) => {
      const file = new Blob([`${n}${i}`], { type: 'text/plain' });
      file.name = `pasted-file-${new Date().getTime()}.txt`;
      file.lastModifiedDate= new Date();
      return files.push(file);
    });
    const sampleComponent = (
      <UploaderList files={files} />
    );
    const sampleCode = "<UploaderList files={[...]} />";
    const sampleProps = [
      {
        propName: 'files',
        propType: 'arrayOf(instanceOf(File))',
        defaultProp: '[]',
        desc: 'This is the list of files you want to display.'
      }
    ];

    return (
      <Doc id="DocUploaderList"
           tag="<UploaderList>"
           desc="The UploaderList component is used to list valid files."
           sampleCode={sampleCode}
           sampleComponent={sampleComponent}
           sampleProps={sampleProps} />
    );
  }
}

export default DocUploaderList;
