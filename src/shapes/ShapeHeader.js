import React, { Component } from 'react';
import Shape from './Shape';
import { fixtures } from 'fdns-ui-react';
const json = fixtures.headers[0];

class ShapeHeader extends Component {
  render() {
    const sampleProps = [
      {
        propName: 'path',
        propType: 'string',
        desc: 'This is a [jsonpath](http://jsonpath.com/) string to let components know where to find data.'
      },{
        propName: 'label',
        propType: 'string',
        desc: 'This is a label that will show up to describe this data element.'
      },{
        propName: 'visible',
        propType: 'bool',
        desc: 'This is used in components to display this data element.'
      },{
        propName: 'icon',
        propType: 'string',
        desc: 'This is the name of the [font awesome icon](http://fontawesome.io/icons/) to describe the data element.'
      },{
        propName: 'iconColor',
        propType: 'string',
        desc: 'This is the hex string of the color value for the icon.'
      }
    ];

    return (
      <Shape id="ShapeHeader"
             name="_header"
             json={JSON.stringify(json)}
             sampleProps={sampleProps} />
    );
  }
}

export default ShapeHeader;