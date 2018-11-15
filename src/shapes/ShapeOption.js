import React, { Component } from 'react';
import Shape from './Shape';
const json = {
  "label": "Option A",
  "value": "Option A"
};

class ShapeOption extends Component {
  render() {
    const sampleProps = [
      {
        propName: 'label',
        propType: 'string',
        desc: 'This is the label of the option.'
      },{
        propName: 'value',
        propType: 'string',
        desc: 'This is the value of the option.'
      }
    ];

    return (
      <Shape id="ShapeOption"
             name="_option"
             json={JSON.stringify(json)}
             sampleProps={sampleProps} />
    );
  }
}

export default ShapeOption;