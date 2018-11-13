import React, { Component } from 'react';
import swal from 'sweetalert2';
import Doc from './Doc';
import { SearchBar } from 'fdns-ui-react';

class DocSearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(query) {
    swal('Search Click', `The search event has been triggered! Query: "${query}"`, 'success');
  }

  render() {
    const sampleComponent = (
      <SearchBar onSearch={this.handleSearch} />
    );
    const sampleCode = '<SearchBar />';
    const sampleProps = [
      {
        propName: 'query',
        propType: 'string',
        defaultProp: '""',
        desc: 'This is the populated query of the search bar, can be changed from props or from state.'
      },{
        propName: 'onSearch',
        propType: 'func',
        defaultProp: 'function(){}',
        desc: 'This is the event triggered for when the user wants to search something.'
      }
    ];

    return (
      <Doc id="DocSearchBar"
           tag="<SearchBar>"
           desc="The SearchBar is used in conjunction with the Common Indexing Microservice to provide an easy way to search data."
           sampleCode={sampleCode}
           sampleComponent={sampleComponent}
           sampleProps={sampleProps} />
    );
  }
}

export default DocSearchBar;