import React, { Component } from 'react';
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";
import './App.css';

class App extends Component {

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

  render() {
    return (
      <Wrapper>
        <Title>FFXIV Click Game</Title>
        <div className="card-wrapper">
          {this.shuffle(characters).map(character => (
            <CharacterCard
              id={character.id}
              name={character.name}
              image={character.image}
            />
          ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;
