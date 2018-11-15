import React, { Component } from 'react';
import Doc from './Doc';
import { DataEndpoint } from 'fdns-ui-react';

class DocDataEndpoint extends Component {
  render() {
    const sampleComponent = (
      <DataEndpoint />
    );
    const sampleCode = "<DataEndpoint endoint={endpoint} />";
    const sampleProps = [
      {
        propName: 'endpoint',
        propType: 'string',
        defaultProp: 'window.location.href',
        desc: 'This is the endpoint that is displayed in the form.'
      }
    ];

    return (
      <Doc id="DocDataEndpoint"
           tag="<DataEndpoint>"
           desc="The DataEndpoint component is used to display and easily copy the endpoint of the data view."
           sampleCode={sampleCode}
           sampleComponent={sampleComponent}
           sampleProps={sampleProps} />
    );
  }
}

export default DocDataEndpoint;
