import React from 'react';
import Table from './Table';
import { divideIntoCategories } from './actions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tables: [],
    };
  }

  componentDidMount() {
    convertData()
      .then((data) => {
        divideIntoCategories(data.Report.Parameters.Parameter, this);
        this.setState({ reportType: data.Report.$.ReportType });
      });
  }

  render() {
    return (
      <div className="root">
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper container">
              <a href="#!" className="brand-logo">
                <i className="material-icons">cloud</i>Flexible Report
              </a>
              <ul className="right hide-on-med-and-down">
                <li><a href="sass.html"><i className="material-icons">search</i></a></li>
                <li><a href="badges.html"><i className="material-icons">view_module</i></a></li>
                <li><a href="collapsible.html"><i className="material-icons">refresh</i></a></li>
                <li><a href="mobile.html"><i className="material-icons">more_vert</i></a></li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="container">
          <h4>Report Type: {this.state.reportType}</h4>
          {this.state.tables.map((table) => {
            return (
              <Table
                key={table.category}
                category={table.category}
                parameters={table.parameters}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
