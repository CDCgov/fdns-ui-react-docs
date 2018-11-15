import React, { Component } from 'react';
import PropTypes from 'prop-types';
import JSONPretty from 'react-json-pretty';
import Markdown from 'react-remarkable';

// set the prop types from predefined shapes or standard types
const _sampleProp = PropTypes.shape({
  propName: PropTypes.string,
  propType: PropTypes.string,
  desc: PropTypes.string
});
const propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  json: PropTypes.string,
  sampleProps: PropTypes.arrayOf(_sampleProp)
};

// set the defaults
const defaultProps = {
  id: '',
  name: 'Sample',
  json: '',
  sampleProps: []
};

class Shape extends Component {
  renderSampleProp(sampleProp, i) {
    const { propName, propType, desc } = sampleProp;
    return (
      <tr key={i}>
        <td>{propName}</td>
        <td><em><Markdown>{propType}</Markdown></em></td>
        <td><Markdown>{desc}</Markdown></td>
      </tr>
    );
  }

  render() {
    return (
      <div className="shape" id={this.props.id}>
        <h3>{this.props.name}</h3>
        <JSONPretty json={this.props.json}></JSONPretty>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th width="20%">Name</th>
              <th width="20%">Type</th>
              <th width="60%">Description</th>
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
Shape.propTypes = propTypes;
Shape.defaultProps = defaultProps;

export default Shape;