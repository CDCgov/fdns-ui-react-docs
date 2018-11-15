import React, { Component } from 'react';
import Shape from './Shape';
const json = {
  "title": "My Title",
  "subtitle": "My Sub Title"
};

class ShapeHistoryItem extends Component {
  render() {
    const sampleProps = [
      {
        propName: 'title',
        propType: 'string',
        desc: 'This is the title option that is passed to the pane.'
      },{
        propName: 'subtitle',
        propType: 'string',
        desc: 'This is the subtitle option that is passed to the pane.'
      }
    ];

    return (
      <Shape id="ShapeHistoryItem"
             name="_historyItem"
             json={JSON.stringify(json)}
             sampleProps={sampleProps} />
    );
  }
}

export default ShapeHistoryItem;
