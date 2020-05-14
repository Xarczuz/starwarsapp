import React, { Component } from 'react';
import People from './components/people';

import './App.css';

class App extends Component {
  state = {
    results: [],
    isLoading: true,
  };

  tempData = [];

  fetchUntilCondition(apiCall) {
    fetch(apiCall)
      .then((res) => res.json())
      .then((data) => {
        console.log('here I am');
        console.log(data);
        data.results.forEach((element) => {
          this.tempData.push(element);
        });

        if (!data.next != null) {
          this.fetchUntilCondition(data.next); // fetch again
        }
      })
      .catch(console.log)
      .finally(this.setState({ results: this.tempData, isLoading: false }));
  }
  componentDidMount() {
    this.fetchUntilCondition('https://swapi.dev/api/people');
  }

  render() {
    return (
      <div>
        {this.state.isLoading && <i className="fa fa-spinner fa-spin"></i>}
        {!this.state.isLoading && (
          //external component passing Server data to its classes
          <People sw={this.state.results} />
        )}
      </div>
    );
  }

  test(data) {
    console.log(data);
  }
}

export default App;
