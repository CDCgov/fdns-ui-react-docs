import React, { Component } from 'react';
import swal from 'sweetalert2';
import Doc from './Doc';
import { DataLayers, fixtures, Button } from 'fdns-ui-react';
const { headers } = fixtures;

class DocDataLayers extends Component {
  // init
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.getHeight = this.getHeight.bind(this);
  }

  // handle the save event
  handleSave = () => {
    swal('Save', 'The data layers has been saved!', 'success');
  }

  // handle the click event of the toggle button
  handleClick() {
    const { active } = this.state;

    this.setState({
      active: !active,
    });
  }

  // get height
  getHeight() {
    return window.innerHeight;
  }

  render() {
    const { active } = this.state;

    const sampleComponent = (
      <div className="data-layers-wrapper">
        <Button onClick={this.handleClick}>Toggle Data Layers</Button>
        <DataLayers headers={headers} active={active} getHeight={this.getHeight} onSave={this.handleSave} />
      </div>
    );

    const sampleCode = "<DataLayers headers={headers} onSave={this.handleSave} />";
    
    const sampleProps = [
      {
        propName: 'headers',
        propType: 'arrayOf([_header](#ShapeHeader))',
        defaultProp: '[]',
        desc: 'This is how you structure the data within the data layers. Please see the [_header](#ShapeHeader) shape for more information.'
      },{
        propName: 'active',
        propType: 'bool',
        defaultProp: 'false',
        desc: 'This is whether the data layers is active in the display.'
      },{
        propName: 'onSave',
        propType: 'func',
        defaultProp: null,
        desc: 'This is the method that is called when the save button is clicked.'
      },{
        propName: 'height',
        propType: 'number',
        defaultProp: '800',
        desc: 'This is the height option for the data layers.'
      },{
        propName: 'getHeight',
        propType: 'func',
        defaultProp: null,
        desc: 'This is a dynamic height method for the data layers.'
      }
    ];

    return (
      <Doc id="DocDataLayers"
           tag="<DataLayers>"
           desc="The DataLayers component is used to modify the available headers."
           sampleCode={sampleCode}
           sampleComponent={sampleComponent}
           sampleProps={sampleProps} />
    );
  }
}

export default DocDataLayers;
