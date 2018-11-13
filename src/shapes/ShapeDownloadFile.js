import React, { Component } from 'react';
import Shape from './Shape';
const json = {
  size: 100,
  drawer: 'test',
  modified: '2017-09-01T12:06:22.923Z',
  url: 'http://localhost:8082/storage/api/1.0/node/reporting/dl?id=1',
  etag: 'test',
  id: '1',
};

class ShapeDownloadFile extends Component {
  render() {
    const sampleProps = [
      {
        propName: 'size',
        propType: 'number',
        desc: 'This is size of the downloadable file.',
      },{
        propName: 'drawer',
        propType: 'string',
        desc: 'This is the name of the drawer on common-ms-storage where the file can be downloaded.',
      },{
        propName: 'modified',
        propType: 'string',
        desc: 'This is the last modified date of the downloadable file.',
      },{
        propName: 'etag',
        propType: 'string',
        desc: 'This is the etag of the downloadable file.',
      },{
        propName: 'id',
        propType: 'string',
        desc: 'This is the id of the downloadable file.',
      }
    ];

    return (
      <Shape id="ShapeDownloadFile"
             name="_downloadFile"
             json={JSON.stringify(json)}
             sampleProps={sampleProps} />
    );
  }
}

export default ShapeDownloadFile;
