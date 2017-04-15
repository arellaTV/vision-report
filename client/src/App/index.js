import React from 'react';
import Table from './Table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tables: [],
    };
  }

  componentDidMount() {
    convertData()
      .then(data => this.divideIntoCategories(data.Report.Parameters.Parameter));
  }

  divideIntoCategories(parameters) {
    const categories = {};
    const tables = [];

    parameters.forEach((parameter) => {
      const currentCategory = parameter.Categories.Category;
      if (!categories[currentCategory]) {
        categories[currentCategory] = [];
      }
      categories[currentCategory].push(parameter);
    });

    for (let key in categories) {
      tables.push({
        category: key,
        parameters: categories[key],
      });
    }

    this.setState({ tables });
  }

  render() {
    return (
      <div>
        <h1>Semen Report</h1>
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
    );
  }
}

export default App;