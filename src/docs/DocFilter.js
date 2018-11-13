import React, { Component } from 'react';
import Doc from './Doc';
import { Filter } from 'fdns-ui-react';

class DocFilter extends Component {
  render() {
    const sampleComponent = (
      <Filter label="My Filter" placeholder="My Placeholder Value" icon="cogs" />
    );
    const sampleCode = "<Filter label=\"My Filter\" placeholder=\"My Placeholder Value\" icon=\"cogs\" />";
    const sampleProps = [
      {
        propName: 'value',
        propType: 'string',
        defaultProp: '""',
        desc: 'This is the value of the filter.'
      },{
        propName: 'label',
        propType: 'string',
        defaultProp: 'Filter',
        desc: 'This is the Label displayed on the filter.'
      },{
        propName: 'placeholder',
        propType: 'string',
        defaultProp: 'Placeholder',
        desc: 'This is the Placeholder displayed on the filter.'
      },{
        propName: 'icon',
        propType: 'string',
        defaultProp: null,
        desc: 'This is the icon on the Filter. Pass the name of a Font Awesome icon, ex: icon="cogs".'
      },{
        propName: 'control',
        propType: 'object',
        defaultProp: null,
        desc: 'This is a custom control object you can pass in for the filter.'
      }
    ];

    return (
      <Doc id="DocFilter"
           tag="<Filter>"
           desc="The Filter component is used along with search or a form to filter information from the user."
           sampleCode={sampleCode}
           sampleComponent={sampleComponent}
           sampleProps={sampleProps} />
    );
  }
}

export default DocFilter;
