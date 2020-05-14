import React, { Component } from 'react';

class People extends Component {
  i = 0;
  filter = '';

  componentDidMount() {
    this.setState({
      peoples: this.props.sw,
      filter: '',
    });
  }

  onClick(event) {
    console.log(event.target.innerHTML);
    let x = document.getElementsByClassName(event.target.innerHTML)[0];
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  }

  increase() {
    this.i++;
    return this.i;
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
          <input onChange={this.handleChange}></input>
        </center>
        {this.props.sw
          .filter((character) => {
            const searchRegex = new RegExp(this.filter);
            return searchRegex.test(character.name.toLowerCase());
          })
          .map((character) => (
            <div className="card" id={this.increase()} key={this.i}>
              <div className="card-body">
                <h5 className="card-title" onClick={this.onClick}>
                  {character.name}
                </h5>
                <div className={character.name} style={{ display: 'none' }}>
                  <p className="card-title">birth year: {character.birth_year}</p>
                  <p className="card-title">eye color: {character.eye_color}</p>
                  <p className="card-title">gender: {character.gender}</p>
                  <p className="card-title">height: {character.height}</p>
                  <p className="card-title">skin color: {character.skin_color}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

export default People;
