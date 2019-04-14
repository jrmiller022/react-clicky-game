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

  clickCount = event => {
    const currentCard = event.targetçç;
    const CardAlreadyClicked =
      this.state.clickedCard.indexOf(currentCard) > -1;

    if (CardAlreadyClicked) {
      this.setState({
        Instrument: this.state.instruments.sort(function () {
          return 0.5 - Math.random();
        }),
        clickedCard: [],
        score: 0
      });
      alert("You lose");

    } else {
      this.setState(
        {
          instrument: this.state.instruments.sort(function () {
            return 0.5 - Math.random();
          }),
          clickedCard: this.state.clickedCard.concat(
            currentCard
          ),
          score: this.state.score + 1
        },

        () => {
          if (this.state.score === 12) {
            alert("Yes! You Win!");
            this.setState({
              instrument: this.state.instruments.sort(function () {
                return 0.5 - Math.random();
              }),
              clickedCard: [],
              score: 0
            });
          }
        }
      );
    }
  };


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
