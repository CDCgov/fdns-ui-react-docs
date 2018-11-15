import React, { Component } from 'react';
import Shape from './Shape';
const json = {
  "Today": [
    {
      "title": "My Title",
      "subtitle": "My Sub Title"
    },{
      "title": "My Title",
      "subtitle": "My Sub Title"
    }
  ]
};

class ShapeHistoryGroup extends Component {
  render() {
    const sampleProps = [
      {
        propName: 'label',
        propType: 'arrayOf([_historyItem](#ShapeHistoryItem))',
        desc: 'This is they key name with an array of items.'
      }
    ];

    return (
      <Shape id="ShapeHistoryGroup"
             name="_historyGroup"
             json={JSON.stringify(json)}
             sampleProps={sampleProps} />
    );
  }
}

export default ShapeHistoryGroup;
