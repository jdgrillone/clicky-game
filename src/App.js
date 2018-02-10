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

  // Handles game state
  clickedCharacter = id => {
    // Save old game state
    const m = this.state.characters.length;
    const newcharacters = this.state.characters.filter(character => character.id !== id);
    // Check if there is a new game state
    if (m === newcharacters.length) {
      this.gameOver();
    } else {
      // Increment Score
      this.handleIncrement();
      // Update game state
      this.setState({ characters: newcharacters });
    }
    console.log(this.state.characters);
  }

  // Game over handler
  gameOver = () => {
    this.setState({ count: 0, characters: characters })
    console.log("Game Over");    
  }

  // Handles increment on count state
  handleIncrement = () => {
    // Reset
    if (this.state.count === 12) {
      this.setState({ count: 0 });
    }
    // Set new High Score
    else if (this.state.count >= this.state.highscore) {
      this.setState({ count: this.state.count + 1, highscore: this.state.count + 1 })
    } else {
      this.setState({ count: this.state.count + 1 })
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
  clickEvent = (id) => {
    // Check & Update game state
    this.clickedCharacter(id);
    // Re-render DOM to shuffle cards
    ReactDOM.render(<App />, document.getElementById('root'));
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
