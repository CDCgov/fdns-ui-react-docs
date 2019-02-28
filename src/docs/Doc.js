import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Highlight from 'react-highlight';
import Markdown from 'react-remarkable';
import JSONPretty from 'react-json-pretty';
import { Paper, Typography, Table, TableBody, TableCell, TableHead, TableRow } from 'fdns-ui-react';

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
      <TableRow key={i}>
        <TableCell>{propName}</TableCell>
        <TableCell><em><Markdown>{propType}</Markdown></em></TableCell>
        <TableCell>{preDefaultProp}</TableCell>
        <TableCell><Markdown>{desc}</Markdown></TableCell>
      </TableRow>
    );
  }

  renderImportant(important) {
    if (important) {
      return (
        <div className="important-notes">
        <Typography variant="h5" color="inherit" gutterBottom><i className="fa fa-exclamation-triangle" aria-hidden="true"></i>Important:</Typography>
          <Typography variant="h4" color="inherit" gutterBottom>{important}</Typography>
        </div>
      );
    }

    return;
  }

  render() {
    const componentClassName = `component ${this.props.background}`;

    return (
      <div className={componentClassName} id={this.props.id}>
        <Typography variant="h5" color="inherit" gutterBottom>{this.props.tag}</Typography>
        <Typography color="inherit" gutterBottom>{this.props.desc}</Typography>
        <div className="contain-component">
          {this.props.sampleComponent}
        </div>
        <Typography variant="h6" color="inherit" gutterBottom>Sample Code</Typography>
        <Highlight className='jsx'>
          {this.props.sampleCode}
        </Highlight>
        {this.renderImportant(this.props.important)}
        <Typography variant="h6" color="inherit" gutterBottom>Props</Typography>
        <Paper elevation={12}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Default</TableCell>
                <TableCell colSpan={3}>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.sampleProps.map(this.renderSampleProp)}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

// set the props, defaults and export
Doc.propTypes = propTypes;
Doc.defaultProps = defaultProps;

export default Doc;
