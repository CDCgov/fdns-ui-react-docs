import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Highlight from 'react-highlight';
import Markdown from 'react-remarkable';
import JSONPretty from 'react-json-pretty';

// set the prop types from predefined shapes or standard types
const _sampleProp = PropTypes.shape({
  propName: PropTypes.string,
  propType: PropTypes.string,
  defaultProp: PropTypes.string,
  desc: PropTypes.string
});
const propTypes = {
  id: PropTypes.string,
  tag: PropTypes.string,
  desc: PropTypes.string,
  sampleComponent: PropTypes.object,
  sampleCode: PropTypes.string,
  sampleProps: PropTypes.arrayOf(_sampleProp),
  important: PropTypes.string,
  background: PropTypes.string,
};

// set the defaults
const defaultProps = {
  id: '',
  tag: '<Sample>',
  desc: '',
  sampleComponent: <div></div>,
  sampleCode: '',
  sampleProps: [],
  background: '',
};

// define the class
class Doc extends Component {
  renderSampleProp(sampleProp, i) {
    const { propName, propType, defaultProp, desc } = sampleProp;
    let preDefaultProp = 'none';
    if (defaultProp) {
      if (defaultProp[0] === '{') {
        preDefaultProp = (<JSONPretty json={defaultProp}></JSONPretty>);
      } else {
        preDefaultProp = (<pre>{defaultProp}</pre>);  
      }
    }
    return (
      <tr key={i}>
        <td>{propName}</td>
        <td><em><Markdown>{propType}</Markdown></em></td>
        <td>{preDefaultProp}</td>
        <td><Markdown>{desc}</Markdown></td>
      </tr>
    );
  }

  renderImportant(important) {
    if (important) {
      return (
        <div className="important-notes">
          <h4><i className="fa fa-exclamation-triangle" aria-hidden="true"></i>Important:</h4>
          <p>{important}</p>
        </div>
      );
    }

    return;
  }

  render() {
    const componentClassName = `component ${this.props.background}`;

    return (
      <div className={componentClassName} id={this.props.id}>
        <h3>{this.props.tag}</h3>
        <p>{this.props.desc}</p>
        <div className="contain-component">
          {this.props.sampleComponent}
        </div>
        <h4>Sample Code</h4>
        <Highlight className='jsx'>
          {this.props.sampleCode}
        </Highlight>
        {this.renderImportant(this.props.important)}
        <h4>Props</h4>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th width="15%">Name</th>
              <th width="15%">Type</th>
              <th width="15%">Default</th>
              <th width="55%">Description</th>
            </tr>
          </thead>
          <tbody>
            {this.props.sampleProps.map(this.renderSampleProp)}
          </tbody>
        </table>
      </div>
    );
  }
}

// set the props, defaults and export
Doc.propTypes = propTypes;
Doc.defaultProps = defaultProps;

export default Doc;
