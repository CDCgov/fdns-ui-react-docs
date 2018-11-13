import React, { Component } from 'react';
import Doc from './Doc';
import { Container } from 'fdns-ui-react';

class DocContainer extends Component {
  render() {
    const sampleComponent = (
      <Container>
        <h1>Title</h1>
        <h2>Section Title</h2>
        <h3>Sub-section Title</h3>
        <h4>Content Title</h4>
        <p>This is my container, it is fixed to the specific maximum width and standard height.</p>
      </Container>
    );
    const sampleCode = "<Container>\n  <h1>My Container</h1>\n</Container>";
    const sampleProps = [
      {
        propName: 'style',
        propType: 'string',
        defaultProp: null,
        desc: 'This is a property to override the style of the container such as dynamically.'
      }
    ];

    return (
      <Doc id="DocContainer"
           tag="<Container>"
           desc="The Container component is used as a consistent wrapper for the app context."
           sampleCode={sampleCode}
           sampleComponent={sampleComponent}
           sampleProps={sampleProps}
           background="blue" />
    );
  }
}

export default DocContainer;
