import React, { Component } from 'react';
import swal from 'sweetalert2';
import Doc from './Doc';
import { PaneHistory, fixtures } from 'fdns-ui-react';
const { history } = fixtures;

class DocPaneHistory extends Component {
  handleCollapse = (groupIndex, paneIndex) => {
    swal('Pane Collapse', `A pane from the history has been collapsed with groupIndex: ${groupIndex} and paneIndex: ${paneIndex}`);
  }

  handleReset = () => {
    swal('History Reset', 'The Pane History has been reset.');
  }

  render() {
    const sampleComponent = (
      <PaneHistory history={history} onReset={this.handleReset} onCollapse={this.handleCollapse} />
    );
    const sampleCode = '<PaneHistory history={history} />';
    const sampleProps = [
      {
        propName: 'history',
        propType: 'arrayOf([_historyGroup](#ShapeHistoryGroup))',
        defaultProp: '[]',
        desc: 'This is the history array that is passed to render the groups and panes.'
      },{
        propName: 'mainTitle',
        propType: 'string',
        defaultProp: 'All Results',
        desc: 'This is the title that displays in the main pane.'
      },{
        propName: 'mainSubtitle',
        propType: 'string',
        defaultProp: '100 Results',
        desc: 'This is the subtitle that displays in the main pane.'
      },{
        propName: 'onCollapse',
        propType: 'func',
        defaultProp: 'function(){}',
        desc: 'This is the method that is called when one of the panes are collapsed or "selected".'
      },{
        propName: 'onReset',
        propType: 'func',
        defaultProp: 'function(){}',
        desc: 'This is the method that is called when the reset button is clicked.'
      }
    ];

    return (
      <Doc id="DocPaneHistory"
           tag="<PaneHistory>"
           desc="The PaneHistory is used to show a history of panes such as from searches."
           sampleCode={sampleCode}
           sampleComponent={sampleComponent}
           sampleProps={sampleProps} />
    );
  }
}

export default DocPaneHistory;
