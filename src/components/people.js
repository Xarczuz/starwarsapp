import React, { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { CustomizedExpansionPanels } from './panel';

class People extends Component {
  i = 0;
  filter = '';

  componentDidMount() {
    this.setState({
      peoples: this.props.sw,
    });
  }

  increase() {
    return this.i++;
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.filter = e.target.value.toLowerCase();
    this.forceUpdate();
  };

  render() {
    return (
      <div>
        <center>
          <h1>Character List</h1>
          <div>
            <SearchIcon id="SearchIcon" />
            <InputBase id="InputBase" onChange={this.handleChange} placeholder="Search…" />
          </div>
        </center>
        <ul>
          {this.props.sw
            .filter((character) => {
              const searchRegex = new RegExp(this.filter);
              return searchRegex.test(character.name.toLowerCase());
            })
            .map((character) => (
              <li key={this.increase()}>
                <CustomizedExpansionPanels character={character} />
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default People;
