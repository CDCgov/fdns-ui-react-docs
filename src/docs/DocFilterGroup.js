import React, { Component } from 'react';
import swal from 'sweetalert2';
import Doc from './Doc';
import { FilterGroup, Filter } from 'fdns-ui-react';

class DocFilterGroup extends Component {
  constructor(props) {
    super(props);
    this.handleApply = this.handleApply.bind(this);
  }

  handleApply(data) {
    console.log(data);
    swal('Apply Click', `The apply click has been triggered! Filter A: "${data.a.value}" and Filter B: "${data.b.value}"`, 'success');
  }

  render() {
    const sampleComponent = (
      <FilterGroup onApply={this.handleApply}>
        <Filter ref="a" label="Filter A" placeholder="Filter A" icon={["far", "folder"]} />
        <Filter ref="b" label="Filter B" placeholder="Filter B" icon={["far", "file"]} />
      </FilterGroup>
    );
    const sampleCode = '<FilterGroup onApply={this.handleApply}>\n  <Filter ref="a" label="Filter A" placeholder="Filter A" icon={["far", "folder"]} />\n  <Filter ref="b" label="Filter B" placeholder="Filter B" icon={["far", "file"]} />\n</FilterGroup>';
    const sampleProps = [
      {
        propName: 'onApply',
        propType: 'func',
        defaultProp: null,
        desc: 'This event is triggered when the apply button is clicked.'
      },{
        propName: 'onReset',
        propType: 'func',
        defaultProp: null,
        desc: 'This event is triggered when the reset button is clicked.'
      }
    ];

    return (
      <Doc id="DocFilterGroup"
           tag="<FilterGroup>"
           desc="The FilterGroup is used to group Filters together and have a common apply / reset method from FilterAction used with the group."
           sampleCode={sampleCode}
           sampleComponent={sampleComponent}
           sampleProps={sampleProps}
           important="You MUST include a value for ref on each filter that you want to function with Apply or Reset." />
    );
  }
}

export default DocFilterGroup;
