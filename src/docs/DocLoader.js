import React, { Component } from 'react';
import Doc from './Doc';
import { Loader, Button } from 'fdns-ui-react';

class DocLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  // handle the load trigger
  handleTrigger = (e) => {
    this.setState({
      active: true,
    });

    // remove the loader after 3 secs
    setTimeout(() => {
      this.setState({
        active: false,
      });      
    }, (3 * 1000));
  }

  render() {
    const { active } = this.state;
    const sampleComponent = (
      <div className="loader-wrapper">
        <Button onClick={this.handleTrigger}>Trigger Loader</Button>
        <Loader active={active} />
      </div>
    );
    const sampleCode = "<Loader />";
    const sampleProps = [
      {
        propName: 'message',
        propType: 'string',
        defaultProp: 'Loading...',
        desc: 'This is the message that appears in the loader.'
      },{
        propName: 'active',
        propType: 'bool',
        defaultProp: 'false',
        desc: 'This is whether the loader is displayed or not.'
      }
    ];

    return (
      <Doc id="DocLoader"
           tag="<Loader>"
           desc="The Loader component is used as a consistent wrapper for the app context."
           sampleCode={sampleCode}
           sampleComponent={sampleComponent}
           sampleProps={sampleProps} />
    );
  }
}

export default DocLoader;
