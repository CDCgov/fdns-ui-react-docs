import React, { Component } from 'react';
import Doc from './Doc';
import { Pane } from 'fdns-ui-react';

class DocPane extends Component {
  render() {
    const sampleComponent = (
      <Pane title="My Pane">
        <div>This is my pane content!</div>
      </Pane>
    );
    const sampleCode = '<Pane title="My Pane">\n  <div>This is my pane content!</div>\n</Pane>';
    const sampleProps = [
      {
        propName: 'title',
        propType: 'string',
        defaultProp: 'Title',
        desc: 'This is the Title value of your pane.'
      },{
        propName: 'subtitle',
        propType: 'string',
        defaultProp: 'Subtitle',
        desc: 'This is the Subtitle value of your pane.'
      },{
        propName: 'collapsed',
        propType: 'bool',
        defaultProp: 'true',
        desc: 'This is a boolean value to collapse or uncollapse the event. When loaded it will be the default state, changing the prop will trigger a collapse / uncollapse event.'
      },{
        propName: 'onCollapse',
        propType: 'func',
        defaultProp: null,
        desc: 'A function to override the default onCollapse event.'
      }
    ];

    return (
      <Doc id="DocPane"
           tag="<Pane>"
           desc="The Pane is a place to nest your data, Panes work great as a container for other componements."
           sampleCode={sampleCode}
           sampleComponent={sampleComponent}
           sampleProps={sampleProps} />
    );
  }
}

export default DocPane;