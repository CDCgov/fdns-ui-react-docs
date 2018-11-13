import React, { Component } from 'react';
import Shape from './Shape';
const json = {};
json['errors'] = 1;
json['warnings'] = 1;
json['explanation'] = [
  {
    "key": "C-001",
    "description": "Lorem ipsum dolor sit amet, luptatum consetetur ut mea, ex brute ubique repudiandae per. Oporteat iracundia omittantur ad nam, ut placerat rationibus reprehendunt ius, per virtute epicuri blandit te no.",
    "type": "ERROR",
    "category": "Structural"
  },{
    "key": "C-014",
    "description": "Lorem ipsum dolor sit amet, luptatum consetetur ut mea, ex brute ubique repudiandae per. Oporteat iracundia omittantur ad nam, ut placerat rationibus reprehendunt ius, per virtute epicuri blandit te no.",
    "type": "WARNING",
    "category": "Structural"
  }
];

class ShapeAnalysis extends Component {
  render() {
    const sampleProps = [
      {
        propName: 'valid',
        propType: 'bool',
        desc: 'This is to determine if the analysis validation is valid or not.'
      },{
        propName: 'warnings',
        propType: 'number',
        desc: 'This is the total count for warnings in the analysis.'
      },{
        propName: 'errors',
        propType: 'number',
        desc: 'This is the total count for errors in the analysis.'
      },{
        propName: 'explanation',
        propType: 'arrayOf([_warningOrError](#ShapeWarningOrError))',
        desc: 'This is where the details of the warnings and errors are stored. Please see the [_warningOrError](#ShapeWarningOrError) shape for more information.'
      }
    ];

    return (
      <Shape id="ShapeAnalysis"
             name="_analysis"
             json={JSON.stringify(json)}
             sampleProps={sampleProps} />
    );
  }
}

export default ShapeAnalysis;