import React, { Component } from 'react';
import CharacterCard from "./components/CharacterCard";
import characters from "./characters.json";
import './App.css';

class App extends Component {
  render() {
    return (
        characters.map(character => (
          <CharacterCard
            id={character.id}
            name={character.name}
            image={character.image}
          />
        ))

    );
  }
}

export default App;
