import React, { Component } from 'react';
import { Collapse, Grid, Typography, fixtures } from 'fdns-ui-react';

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
        <Grid className="jumbotron" item xs={12}>
          <Typography variant="h2" color="inherit" gutterBottom>FDNS UI React</Typography>
          <Typography variant="h5" color="inherit" paragraph={true} gutterBottom>A front-end framework for Foundation Services (FDNS).</Typography>
          <Typography className="version" variant="caption" color="inherit">{`Currently v${fixtures.version}`}</Typography>
        </Grid>
        <Grid container id="docs">
          <Grid item xs={10}>
            <img src={icoLayout} alt="Layout" className="ico" />
            <Typography variant="h3" color="inherit" paragraph={true}>Layout</Typography>
            <Typography>{'Layout components are used for basic layout of data and other components.'}</Typography>
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
            <Typography variant="h3" color="inherit" paragraph={true}>Search</Typography>
            <Typography>{'Search components are used with the FDNS Indexing Microservice to provide an easy way to search data for your application.'}</Typography>
            <DocSearchBar />

            <img src={icoFilters} alt="Filters" className="ico" />
            <Typography variant="h3" color="inherit" paragraph={true}>Filters</Typography>
            <Typography>{'Filters are used to filter information from the user to a backend.'}</Typography>
            <DocFilter />
            <DocFilterDate />
            <DocFilterSelect />
            <DocFilterGroup />
            <DocFilterAction />

            <img src={icoData} alt="Data" className="ico" />
            <Typography variant="h3" color="inherit" paragraph={true}>Data</Typography>
            <Typography>{'The Data components are used to display and navigate data.'}</Typography>
            <DocDataEndpoint />
            <DocDataInspector />
            <DocDataLayers />
            <DocUploader />
            <DocUploaderDrop />
            <DocUploaderPaste />
            <DocUploaderList />

            <img src={icoOptions} alt="Options" className="ico" />
            <Typography variant="h3" color="inherit" paragraph={true}>Options</Typography>
            <Typography>{'Options are used for changing settings often interacting with other components in callbacks.'}</Typography>
            <DocOptionAction />
            <DocOptionErrorsWarnings />
            <DocOptionView />
            <DocOptionExport />
            <DocOptionPageLimit />

            <Typography variant="h3" color="inherit" paragraph={true}>Shapes</Typography>
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
          </Grid>
          <Grid item xs={2}>
            <ul id="sidenav">
              <li>
                <Typography onClick={this.collapseNav.bind(this, 'layout')} component="h6" variant="h6" color="inherit">Layout</Typography>
                <Collapse timeout={timeout} in={this.state.layout}>
                  <ul>
                  <Typography>
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
                    </Typography>
                  </ul>
                </Collapse>
              </li>
              <li>
                <Typography onClick={this.collapseNav.bind(this, 'search')} component="h6" variant="h6" color="inherit">Search</Typography>
                <Collapse timeout={timeout} in={this.state.search}>
                  <ul>
                    <Typography>
                      <li><a href="#DocSearchBar">{'<SearchBar>'}</a></li>
                    </Typography>
                  </ul>
                </Collapse>
              </li>
              <li>
                <Typography onClick={this.collapseNav.bind(this, 'filters')} component="h6" variant="h6" color="inherit">Filters</Typography>
                <Collapse timeout={timeout} in={this.state.filters}>
                  <ul>
                    <Typography>
                      <li><a href="#DocFilter">{'<Filter>'}</a></li>
                      <li><a href="#DocFilterDate">{'<FilterDate>'}</a></li>
                      <li><a href="#DocFilterSelect">{'<FilterSelect>'}</a></li>
                      <li><a href="#DocFilterGroup">{'<FilterGroup>'}</a></li>
                      <li><a href="#DocFilterAction">{'<FilterAction>'}</a></li>
                    </Typography>
                  </ul>
                </Collapse>
              </li>
              <li>
                <Typography onClick={this.collapseNav.bind(this, 'data')} component="h6" variant="h6" color="inherit">Data</Typography>
                <Collapse timeout={timeout} in={this.state.data}>
                  <ul>
                    <Typography>
                      <li><a href="#DocDataEndpoint">{'<DataEndpoint>'}</a></li>
                      <li><a href="#DocDataInspector">{'<DataInspector>'}</a></li>
                      <li><a href="#DocDataLayers">{'<DataLayers>'}</a></li>
                      <li><a href="#DocUploader">{'<Uploader>'}</a></li>
                      <li><a href="#DocUploaderDrop">{'<UploaderDrop>'}</a></li>
                      <li><a href="#DocUploaderPaste">{'<UploaderPaste>'}</a></li>
                      <li><a href="#DocUploaderList">{'<UploaderList>'}</a></li>
                    </Typography>
                  </ul>
                </Collapse>
              </li>
              <li>
                <Typography onClick={this.collapseNav.bind(this, 'options')} component="h6" variant="h6" color="inherit">Options</Typography>
                <Collapse timeout={timeout} in={this.state.options}>
                  <ul>
                    <Typography>
                      <li><a href="#DocOptionAction">{'<OptionAction>'}</a></li>
                      <li><a href="#DocOptionErrorsWarnings">{'<OptionErrorsWarnings>'}</a></li>
                      <li><a href="#DocOptionView">{'<OptionView>'}</a></li>
                      <li><a href="#DocOptionExport">{'<OptionExport>'}</a></li>
                      <li><a href="#DocOptionPageLimit">{'<OptionPageLimit>'}</a></li>
                    </Typography>
                  </ul>
                </Collapse>
              </li>
              <li>
                <Typography onClick={this.collapseNav.bind(this, 'shapes')} component="h6" variant="h6" color="inherit">Shapes</Typography>
                <Collapse timeout={timeout} in={this.state.shapes}>
                  <ul>
                    <Typography>
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
                    </Typography>
                  </ul>
                </Collapse>
              </li>
            </ul>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
