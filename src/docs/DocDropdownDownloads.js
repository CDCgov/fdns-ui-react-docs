import React, { Component } from 'react';
import swal from 'sweetalert2';
import Doc from './Doc';
import { DropdownDownloads } from 'fdns-ui-react';

const downloads = [
  {
    file: {
      size: 100,
      drawer: 'test',
      modified: '2017-09-01T12:06:22.923Z',
      etag: 'test',
      id: '1',
    },
    query: 'year: 2017 tag:foo',
    format: 'xml',
    progress: 1.0,
    _id: '1',
    events: [],
    status: 'COMPLETED',
  },{
    query: '',
    format: 'xlsx',
    progress: 1.0,
    _id: '2',
    events: [],
    status: 'ERROR',
  },{
    query: '',
    format: 'json',
    progress: 0.5,
    _id: '3',
    events: [],
    status: 'RUNNING',
  }
];

class DocDropdownDownloads extends Component {
  handleClear = (e) => {
    swal('Downloads', 'Clear event triggered!');
  }

  // render the URL in downlaods
  renderURL = () => {
    return '#DocDropdownDownloads';
  }

  render() {
    const sampleComponent = (
      <div className="text-right">
        <DropdownDownloads downloads={downloads} onClear={this.handleClear} renderURL={this.renderURL} />
      </div>
    );
    const sampleCode = "<DropdownDownloads downloads={downloads} />";
    const sampleProps = [
      {
        propName: 'headers',
        propType: 'arrayOf([_download](#ShapeDownload))',
        defaultProp: '[]',
        desc: 'This is the object you pass for each download. Please see the [_download](#ShapeDownload) shape for more information.'
      },{
        propName: 'onClear',
        propType: 'func',
        defaultProp: 'function(){}',
        desc: 'This method is called when the clear button is clicked.'
      },{
        propName: 'renderURL',
        propType: 'func',
        defaultProp: null,
        desc: 'This method is called whenever a URL is needed in the download file.'
      }
    ];

    return (
      <Doc id="DocDropdownDownloads"
           tag="<DropdownDownloads>"
           desc="The DropdownDownloads component is used to display information about downloads from the OptionsExport."
           sampleCode={sampleCode}
           sampleComponent={sampleComponent}
           sampleProps={sampleProps} />
    );
  }
}

export default DocDropdownDownloads;
