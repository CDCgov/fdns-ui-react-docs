import React, { Component } from 'react';
import Shape from './Shape';
const json = {
  "key": "C-001",
  "description": "Lorem ipsum dolor sit amet, luptatum consetetur ut mea, ex brute ubique repudiandae per. Oporteat iracundia omittantur ad nam, ut placerat rationibus reprehendunt ius, per virtute epicuri blandit te no.",
  "type": "ERROR",
  "category": "Structural"
};

class ShapeWarningOrError extends Component {
  render() {
    const sampleProps = [
      {
        propName: 'type',
        propType: 'string',
        desc: 'This is either a warning or error type.'
      },{
        propName: 'key',
        propType: 'string',
        desc: 'This is the key of the warning or error is for.'
      },{
        propName: 'category',
        propType: 'string',
        desc: 'This is the category the warning or error falls under.'
      },{
        propName: 'description',
        propType: 'string',
        desc: 'This is a description of the warning or error.'
      }
    ];

    return (
      <Shape id="ShapeWarningOrError"
             name="_warningOrError"
             json={JSON.stringify(json)}
             sampleProps={sampleProps} />
    );
  }
}

export default ShapeWarningOrError;