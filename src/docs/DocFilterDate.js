import React, { Component } from 'react';
import Doc from './Doc';
import { FilterDate } from 'fdns-ui-react';

class DocFilterDate extends Component {
  render() {
    const sampleComponent = (
      <FilterDate />
    );
    const sampleCode = "<FilterDate />";
    const sampleProps = [
      {
        propName: 'start',
        propType: 'string',
        defaultProp: 'null',
        desc: 'This is the value of the start date.'
      },{
        propName: 'startLabel',
        propType: 'string',
        defaultProp: 'Start Date',
        desc: 'This is the value of the label for the start filter.'
      },{
        propName: 'end',
        propType: 'string',
        defaultProp: 'null',
        desc: 'This is the value of the end date.'
      },{
        propName: 'endLabel',
        propType: 'string',
        defaultProp: 'Start Date',
        desc: 'This is the value of the label for the end filter.'
      },{
        propName: 'icon',
        propType: 'string',
        defaultProp: 'calendar',
        desc: 'This is the icon on the Filter. Pass the name of a Font Awesome icon, ex: icon="gear".'
      }
    ];

    return (
      <Doc id="DocFilterDate"
           tag="<FilterDate>"
           desc="The FilterDate component is used to filter start and end dates."
           sampleCode={sampleCode}
           sampleComponent={sampleComponent}
           sampleProps={sampleProps} />
    );
  }
}

export default DocFilterDate;
