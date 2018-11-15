import React, { Component } from 'react';
import Shape from './Shape';
const json = {
  file: {
    size: 100,
    drawer: 'test',
    modified: '2017-09-01T12:06:22.923Z',
    url: 'http://localhost:8082/storage/api/1.0/node/reporting/dl?id=1',
    etag: 'test',
    id: '1',
  },
  query: 'year: 2017 tag:foo',
  format: 'xml',
  progress: 1.0,
  _id: '1',
  events: [
    {
      event: 'CREATED',
      timestamp: '2017-09-01T12:06:22.923Z',
    }
  ],
  status: 'COMPLETED',
};

class ShapeDownload extends Component {
  render() {
    const sampleProps = [
      {
        propName: 'file',
        propType: '[_downloadFile](#ShapeDownloadFile)',
        desc: 'This is the file associated with the download.',
      },{
        propName: 'query',
        propType: 'string',
        desc: 'This is the search query for the download.',
      },{
        propName: 'format',
        propType: 'string',
        desc: 'This is the file format for the download.',
      },{
        propName: 'progress',
        propType: 'number',
        desc: 'This is a float from 0 to 1 that is used to calculate the progress percentage.',
      },{
        propName: '_id',
        propType: 'string',
        desc: 'This is the unique ID for the download job',
      },{
        propName: 'events',
        propType: 'arrayOf([_downloadEvent](#ShapeDownloadEvent))',
        desc: 'This is an array of events associated with the download job.',
      },{
        propName: 'status',
        propType: 'string',
        desc: 'This is the status of the download job, either: RUNNING, COMPLETED or ERROR.',
      }
    ];

    return (
      <Shape id="ShapeDownload"
             name="_download"
             json={JSON.stringify(json)}
             sampleProps={sampleProps} />
    );
  }
}

export default ShapeDownload;
