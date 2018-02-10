import React, { Component } from 'react';
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Counter from "./components/Counter";
import characters from "./characters.json";
import './App.css';
import ReactDOM from 'react-dom';

class App extends Component {

  // Setting the initial state of the Counter component
  state = {
    count: 0,
    highscore: 0,
    characters
  };

  // !!!!NOT WORKING!!!!!
  clickedCharacter = id => {
    const characters = this.state.characters.filter(character => character.id !== id);
    this.setState({ characters });
    console.log(this);
  }

  // Handles increment on count state
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
    if (this.state.highscore < this.state.count) {
      this.setState({ highscore: this.state.count });
    }
  };

  // Fisher-Yates shuffle function
  shuffle = function (array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }

  // Function to contain everything for the click event
  clickEvent = () => {
    // Increment
    this.handleIncrement();
    // Re-render DOM to shuffle cards
    ReactDOM.render(<App />, document.getElementById('root'));
    this.clickedCharacter();
  }

  render() {
    return (
      <Wrapper>
        <Title>FFXIV Click Game</Title>
        <Counter
          count={this.state.count}
          highscore={this.state.highscore} />
        <div className="card-wrapper">
          {this.shuffle(characters).map(character => (
            <CharacterCard
              id={character.id}
              name={character.name}
              image={character.image}
              clickEvent={this.clickEvent}
            />
          ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;
