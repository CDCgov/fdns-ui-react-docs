import React, { Component } from 'react';
import Shape from './Shape';
const json = {
  event: 'CREATED',
  timestamp: '2017-09-01T12:06:22.923Z',
};

class ShapeDownloadEvent extends Component {
  render() {
    const sampleProps = [
      {
        propName: 'event',
        propType: 'string',
        desc: 'This is the name of the event on the download job.',
      },{
        propName: 'timestamp',
        propType: 'string',
        desc: 'This is the timestamp of the event on the download job.',
      }
    ];

    return (
      <Shape id="ShapeDownloadEvent"
             name="_downloadEvent"
             json={JSON.stringify(json)}
             sampleProps={sampleProps} />
    );
  }
}

export default ShapeDownloadEvent;
