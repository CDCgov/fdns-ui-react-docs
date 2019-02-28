import React, { Component } from 'react';
import swal from 'sweetalert2';
import Doc from './Doc';
import { SuperTable, fixtures } from 'fdns-ui-react';
const { messages, headers } = fixtures;
const data = messages.slice(0).splice(0,25);

class DocSuperTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: headers
    };
    this.handleDetail = this.handleDetail.bind(this);
  }

  handleDetail(item) {
    console.log('HANDLE_DETAIL:');
    console.log(item);
    swal('Handle Detail', 'Item detail has been triggered! Please check the console for the rest of the item information.', 'success');
  }

  render() {
    const sampleComponent = (
      <SuperTable data={data}
                  headers={this.state.headers}
                  showErrorsAndWarnings={false}
                  onDetail={this.handleDetail}
                  ref="table" />
    );
    const sampleCode = '<SuperTable data={[...]} headers={[...]} />';
    const sampleProps = [
      {
        propName: 'data',
        propType: 'arrayOf(object)',
        defaultProp: '[]',
        desc: 'This is the data that you pass to the super table.'
      },{
        propName: 'headers',
        propType: 'arrayOf([_header](#ShapeHeader))',
        defaultProp: '[]',
        desc: 'This is the how you structure the data within the super table. Please see the [_header](#ShapeHeader) shape for more information.'
      },{
        propName: 'showErrorsAndWarnings',
        propType: 'bool',
        defaultProp: 'true',
        desc: 'This is a boolean to show the Errors and Warnings column or not.'
      },{
        propName: 'showActions',
        propType: 'bool',
        defaultProp: 'true',
        desc: 'This is a boolean to show the Actions column or not.'
      },{
        propName: 'onDetail',
        propType: 'func',
        defaultProp: 'function(){}',
        desc: 'This is the function that gets called with the action option is clicked.'
      },{
        propName: 'width',
        propType: 'number',
        defaultProp: '800',
        desc: 'This the fixed width value of the table, this can be overridden by getWidth for a dynamic width.'
      },{
        propName: 'height',
        propType: 'number',
        defaultProp: '800',
        desc: 'This the fixed height value of the table, this can be overridden by getHeight for a dynamic height.'
      }
    ];

    return (
      <Doc id="DocSuperTable"
           tag="<SuperTable>"
           desc="The SuperTable is used to display a table of data. You can pass headers to display how you want to display the columns and rows of the table."
           sampleCode={sampleCode}
           sampleComponent={sampleComponent}
           sampleProps={sampleProps} />
    );
  }
}

export default DocSuperTable;