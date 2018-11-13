import React, { Component } from 'react';
import { Collapse, fixtures } from 'fdns-ui-react';

// import docs
import DocSuperGrid from './docs/DocSuperGrid';
import DocSuperTable from './docs/DocSuperTable';
import DocSuperInput from './docs/DocSuperInput';
import DocSuperButton from './docs/DocSuperButton';
import DocLogin from './docs/DocLogin';
import DocPane from './docs/DocPane';
import DocPaneHistory from './docs/DocPaneHistory';
import DocContainer from './docs/DocContainer';
import DocIconButton from './docs/DocIconButton';
import DocSearchBar from './docs/DocSearchBar';
import DocDropdownUser from './docs/DocDropdownUser';
import DocDropdownDownloads from './docs/DocDropdownDownloads';
import DocFilter from './docs/DocFilter';
import DocFilterDate from './docs/DocFilterDate';
import DocFilterSelect from './docs/DocFilterSelect';
import DocFilterGroup from './docs/DocFilterGroup';
import DocFilterAction from './docs/DocFilterAction';
import DocDataEndpoint from './docs/DocDataEndpoint';
import DocDataInspector from './docs/DocDataInspector';
import DocDataLayers from './docs/DocDataLayers';
import DocLoader from './docs/DocLoader';
import DocUploader from './docs/DocUploader';
import DocUploaderDrop from './docs/DocUploaderDrop';
import DocUploaderPaste from './docs/DocUploaderPaste';
import DocUploaderList from './docs/DocUploaderList';
import DocOptionAction from './docs/DocOptionAction';
import DocOptionErrorsWarnings from './docs/DocOptionErrorsWarnings';
import DocOptionView from './docs/DocOptionView';
import DocOptionExport from './docs/DocOptionExport';
import DocOptionPageLimit from './docs/DocOptionPageLimit';
import DocBootstrap from './docs/DocBootstrap';

// import shapes
import ShapeAnalysis from './shapes/ShapeAnalysis';
import ShapeHeader from './shapes/ShapeHeader';
import ShapeHistoryItem from './shapes/ShapeHistoryItem';
import ShapeHistoryGroup from './shapes/ShapeHistoryGroup';
import ShapeOption from './shapes/ShapeOption';
import ShapeWarningOrError from './shapes/ShapeWarningOrError';
import ShapeUser from './shapes/ShapeUser';
import ShapeDownload from './shapes/ShapeDownload';
import ShapeDownloadEvent from './shapes/ShapeDownloadEvent';
import ShapeDownloadFile from './shapes/ShapeDownloadFile';

import icoLayout from './ico/ico-layout.png';
import icoSearch from './ico/ico-search.png';
import icoFilters from './ico/ico-filters.png';
import icoData from './ico/ico-data.png';
import icoOptions from './ico/ico-options.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: false,
      search: false,
      filters: false,
      data: false,
      options: false,
      shapes: false,
      libs: false
    }
  }

  collapseNav(section) {
    var nextState = {};
    nextState[section] = !this.state[section];
    this.setState(nextState);
  }

  // test render everything in the library
  render() {
    const timeout = 0;

    return (
      <div className="App" role="main">
        <div className="jumbotron">
          <h1>FDNS UI React</h1>
          <p>{'A front-end framework for Foundation Services (FDNS).'}</p>
          <p className="version">{`Currently v${fixtures.version}`}</p>
        </div>
        <div className="row-fluid" id="docs">
          <div className="col-md-10">
            <img src={icoLayout} alt="Layout" className="ico" />
            <h2>Layout</h2>
            <p>{'Layout components are used for basic layout of data and other components.'}</p>
            <DocSuperGrid />
            <DocSuperTable />
            <DocPane />
            <DocPaneHistory />
            <DocIconButton />
            <DocContainer />
            <DocLoader />
            <DocDropdownUser />
            <DocDropdownDownloads />
            <DocSuperInput />
            <DocSuperButton />
            <DocLogin />

            <img src={icoSearch} alt="Search" className="ico" />
            <h2>Search</h2>
            <p>{'Search components are used with the FDNS Indexing Microservice to provide an easy way to search data for your application.'}</p>
            <DocSearchBar />

            <img src={icoFilters} alt="Filters" className="ico" />
            <h2>Filters</h2>
            <p>{'Filters are used to filter information from the user to a backend.'}</p>
            <DocFilter />
            <DocFilterDate />
            <DocFilterSelect />
            <DocFilterGroup />
            <DocFilterAction />

            <img src={icoData} alt="Data" className="ico" />
            <h2>Data</h2>
            <p>{'The Data components are used to display and navigate data.'}</p>
            <DocDataEndpoint />
            <DocDataInspector />
            <DocDataLayers />
            <DocUploader />
            <DocUploaderDrop />
            <DocUploaderPaste />
            <DocUploaderList />
            
            <img src={icoOptions} alt="Options" className="ico" />
            <h2>Options</h2>
            <p>{'Options are used for changing settings often interacting with other components in callbacks.'}</p>
            <DocOptionAction />
            <DocOptionErrorsWarnings />
            <DocOptionView />
            <DocOptionExport />
            <DocOptionPageLimit />

            <h2>Shapes</h2>
            <ShapeAnalysis />
            <ShapeDownload />
            <ShapeDownloadEvent />
            <ShapeDownloadFile />
            <ShapeHeader />
            <ShapeHistoryItem />
            <ShapeHistoryGroup />
            <ShapeOption />
            <ShapeWarningOrError />
            <ShapeUser />

            <h2>Bundled Libraries</h2>
            <DocBootstrap />
          </div>
          <div className="col-md-2">
            <ul id="sidenav">
              <li>
                <h3 onClick={this.collapseNav.bind(this, 'layout')}>Layout</h3>
                <Collapse timeout={timeout} in={this.state.layout}>
                  <ul>
                    <li><a href="#DocSuperGrid">{'<SuperGrid>'}</a></li>
                    <li><a href="#DocSuperTable">{'<SuperTable>'}</a></li>
                    <li><a href="#DocPane">{'<Pane>'}</a></li>
                    <li><a href="#DocPaneHistory">{'<PaneHistory>'}</a></li>
                    <li><a href="#DocIconButton">{'<IconButton>'}</a></li>
                    <li><a href="#DocContainer">{'<Container>'}</a></li>
                    <li><a href="#DocLoader">{'<Loader>'}</a></li>
                    <li><a href="#DocDropdownUser">{'<DropdownUser>'}</a></li>
                    <li><a href="#DocDropdownDownloads">{'<DropdownDownloads>'}</a></li>
                    <li><a href="#DocSuperInput">{'<SuperInput>'}</a></li>
                    <li><a href="#DocSuperButton">{'<SuperButton>'}</a></li>
                    <li><a href="#DocLogin">{'<Login>'}</a></li>
                  </ul>
                </Collapse>
              </li>
              <li>
                <h3 onClick={this.collapseNav.bind(this, 'search')}>Search</h3>
                <Collapse timeout={timeout} in={this.state.search}>
                  <ul>
                    <li><a href="#DocSearchBar">{'<SearchBar>'}</a></li>
                  </ul>
                </Collapse>
              </li>
              <li>
                <h3 onClick={this.collapseNav.bind(this, 'filters')}>Filters</h3>
                <Collapse timeout={timeout} in={this.state.filters}>
                  <ul>
                    <li><a href="#DocFilter">{'<Filter>'}</a></li>
                    <li><a href="#DocFilterDate">{'<FilterDate>'}</a></li>
                    <li><a href="#DocFilterSelect">{'<FilterSelect>'}</a></li>
                    <li><a href="#DocFilterGroup">{'<FilterGroup>'}</a></li>
                    <li><a href="#DocFilterAction">{'<FilterAction>'}</a></li>
                  </ul>
                </Collapse>
              </li>
              <li>
                <h3 onClick={this.collapseNav.bind(this, 'data')}>Data</h3>
                <Collapse timeout={timeout} in={this.state.data}>
                  <ul>
                    <li><a href="#DocDataEndpoint">{'<DataEndpoint>'}</a></li>
                    <li><a href="#DocDataInspector">{'<DataInspector>'}</a></li>
                    <li><a href="#DocDataLayers">{'<DataLayers>'}</a></li>
                    <li><a href="#DocUploader">{'<Uploader>'}</a></li>
                    <li><a href="#DocUploaderDrop">{'<UploaderDrop>'}</a></li>
                    <li><a href="#DocUploaderPaste">{'<UploaderPaste>'}</a></li>
                    <li><a href="#DocUploaderList">{'<UploaderList>'}</a></li>
                  </ul>
                </Collapse>
              </li>
              <li>
                <h3 onClick={this.collapseNav.bind(this, 'options')}>Options</h3>
                <Collapse timeout={timeout} in={this.state.options}>
                  <ul>
                    <li><a href="#DocOptionAction">{'<OptionAction>'}</a></li>
                    <li><a href="#DocOptionErrorsWarnings">{'<OptionErrorsWarnings>'}</a></li>
                    <li><a href="#DocOptionView">{'<OptionView>'}</a></li>
                    <li><a href="#DocOptionExport">{'<OptionExport>'}</a></li>
                    <li><a href="#DocOptionPageLimit">{'<OptionPageLimit>'}</a></li>
                  </ul>
                </Collapse>
              </li>
              <li>
                <h3 onClick={this.collapseNav.bind(this, 'shapes')}>Shapes</h3>
                <Collapse timeout={timeout} in={this.state.shapes}>
                  <ul>
                    <li><a href="#ShapeAnalysis">_analysis</a></li>
                    <li><a href="#ShapeDownload">_download</a></li>
                    <li><a href="#ShapeDownloadEvent">_downloadEvent</a></li>
                    <li><a href="#ShapeDownloadFile">_downloadFile</a></li>
                    <li><a href="#ShapeHeader">_header</a></li>
                    <li><a href="#ShapeHistoryItem">_historyItem</a></li>
                    <li><a href="#ShapeHistoryGroup">_historyGroup</a></li>
                    <li><a href="#ShapeOption">_option</a></li>
                    <li><a href="#ShapeWarningOrError">_warningOrError</a></li>
                    <li><a href="#ShapeUser">_user</a></li>
                  </ul>
                </Collapse>
              </li>
              <li>
                <h3 onClick={this.collapseNav.bind(this, 'libs')}>Bundled Libraries</h3>
                <Collapse timeout={timeout} in={this.state.libs}>
                  <ul>
                    <li><a href="#DocBootstrap">Bootstrap</a></li>
                  </ul>
                </Collapse>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
