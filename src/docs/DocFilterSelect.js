import React, { Component } from 'react';
import Doc from './Doc';
import { FilterSelect } from 'fdns-ui-react';

class DocFilterSelect extends Component {
  render() {
    const options = [
      {
        label: 'Option A',
        value: 'Option A'
      },{
        label: 'Option B',
        value: 'Option B'
      },{
        label: 'Option C',
        value: 'Option C'
      }
    ];
    const sampleComponent = (
      <FilterSelect options={options} icon="tag" />
    );
    const sampleCode = '<FilterSelect options={[...]} />';
    const sampleProps = [
      {
        propName: 'selected',
        propType: 'string',
        defaultProp: '""',
        desc: 'This is the value that should be selected in the select options.'
      },{
        propName: 'label',
        propType: 'string',
        defaultProp: 'My Select Filter',
        desc: 'This is the value that populates the label for the filter.'
      },{
        propName: 'icon',
        propType: 'string',
        defaultProp: 'calendar',
        desc: 'This is the icon on the Filter. Pass the name of a Font Awesome icon, ex: icon="gear".'
      },{
        propName: 'placeholder',
        propType: 'string',
        defaultProp: 'Placeholder',
        desc: 'This is the Placeholder displayed on the filter.'
      },{
        propName: 'options',
        propType: 'arrayOf([_option](#ShapeOption))',
        defaultProp: '[]',
        desc: 'This is the structure of the option as it appears in the select filter.'
      }
    ];

    return (
      <Doc id="DocFilterSelect"
           tag="<FilterSelect>"
           desc="The FilterSelect component is used to create a select dropdown for a filter based on passed options."
           sampleCode={sampleCode}
           sampleComponent={sampleComponent}
           sampleProps={sampleProps} />
    );
  }
}

export default DocFilterSelect;
