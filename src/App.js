import React, { Component } from 'react';
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";
import './App.css';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Title>FFXIV Match Game</Title>
        {characters.map(character => (
          <CharacterCard
            id={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
