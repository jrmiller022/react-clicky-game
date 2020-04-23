import React, { Component } from 'react';
import Navbar from "./components/Navbar/Navbar"
import InstruCard from "./components/InstruCard/instruCard"
import Wrapper from "./components/Wrapper/Wrapper"
import instruments from "./instruments.json"
import "./App.css";

class App extends Component {
  state = {
    instruments,
    score: 0,
    topScore: 0
  }

  gameOver = () => {
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score }, function () {
      });
    }
    this.state.instruments.forEach(instrument => {
      instrument.count = 0;
    });
    alert(`Game Over! \nScore: ${this.state.score}`);
    this.setState({ score: 0 });
    return true;
  }

  clickCount = id => {
    this.state.instruments.forEach((o, i) => {
      if (o.id === id) {
        if (instruments[i].count === 0) {
          instruments[i].count = instruments[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function () {
          });
          this.state.instruments.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  }

  render() {
    return (
      <Wrapper>
        <Navbar score={this.state.score} topScore={this.state.topScore}>Clicky Game</Navbar>
        {this.state.instruments.map(instrument => (
          <InstruCard
            clickCount={this.clickCount}
            id={instrument.id}
            key={instrument.id}
            image={instrument.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
