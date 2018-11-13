import React, { Component } from 'react';
import swal from 'sweetalert2';
import Doc from './Doc';
import { SuperGrid, fixtures } from 'fdns-ui-react';
const { messages, headers } = fixtures;

class DocSuperGrid extends Component {
  constructor(props) {
    super(props);
    this.handleDetail = this.handleDetail.bind(this);
  }

  handleDetail(item) {
    console.log('HANDLE_DETAIL:');
    console.log(item);
    swal('Handle Detail', 'Item detail has been triggered! Please check the console for the rest of the item information.', 'success');
  }

  render() {
    const sampleComponent = (
      <SuperGrid data={messages} headers={headers} onDetail={this.handleDetail} />
    );
    const sampleCode = '<SuperGrid data={[...]} headers={[...]} />';
    const sampleProps = [
      {
        propName: 'data',
        propType: 'arrayOf(object)',
        defaultProp: '[]',
        desc: 'This is the data that you pass to the grid.'
      },{
        propName: 'headers',
        propType: 'arrayOf([_header](#ShapeHeader))',
        defaultProp: '[]',
        desc: 'This is the how you structure the data within the grid. Please see the [_header](#ShapeHeader) shape for more information.'
      },{
        propName: 'limit',
        propType: 'number',
        defaultProp: '6',
        desc: 'This limits how many rows will display in your grid.'
      },{
        propName: 'onDetail',
        propType: 'func',
        defaultProp: 'function(){}',
        desc: 'This is the function that gets called with the action option is clicked.'
      },{
        propName: 'footer',
        propType: 'component',
        defaultProp: null,
        desc: 'You can pass your custom component here for the footer.'
      },{
        propName: 'showErrorsAndWarnings',
        propType: 'bool',
        defaultProp: 'true',
        desc: 'This is a boolean to show the Errors and Warnings option or not.'
      },{
        propName: 'showActions',
        propType: 'bool',
        defaultProp: 'true',
        desc: 'This is a boolean to show the Actions option or not.'
      }
    ];
    return (
      <Doc id="DocSuperGrid"
           tag="<SuperGrid>"
           desc="The SuperGrid is used to display a grid of data. You can pass headers to display how you want to display the individual rows in the grid item."
           sampleCode={sampleCode}
           sampleComponent={sampleComponent}
           sampleProps={sampleProps} />
    );
  }
}

export default DocSuperGrid;