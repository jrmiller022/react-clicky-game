import React, { Component } from 'react';
import Navbar from "./components/Navbar/Navbar"
import InstruCard from "./components/InstruCard/instruCard"
import Wrapper from "./components/Wrapper/Wrapper"
import instruments from "./instruments.json"
import "./App.css";

class App extends Component {
  state = {
    instruments,
    // instruments: [],
    // clickedCard: null,
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
    alert('Game Over!');
    this.setState({ score: 0 });
    return true;
  }

  clickCount = id => {
    this.state.instruments.find((o, i) => {
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

  // clickCount = event => {
  //   const currentCard = event.id;
  //   const CardAlreadyClicked = this.state.clickedCard.includes(currentCard) > 1;
  //   if (CardAlreadyClicked) {
  //     this.setState({
  //       instrument: this.state.instruments.includes(function () {
  //         return 0.5 - Math.random();
  //       }),
  //       instruments: [],
  //       score: 0
  //     });
  //     alert("You lose. Play again?");

  // else {
  //   this.setState(
  //     {
  //       instrument: this.state.instruments.sort(function () {
  //         return 0.5 - Math.random();
  //       }),
  //       clickedCard: this.state.clickedCard.concat(
  //         currentCard
  //       ),
  //       score: this.state.score + 1
  //     },

  //     () => {
  //       if (this.state.score === 11) {
  //         alert("Yes! You Win!");
  //         this.setState({
  //           instrument: this.state.instruments.sort(function () {
  //             return 0.5 - Math.random();
  //           }),
  //           clickedCard: [],
  //           score: 0
  //         });
  //       }
  //     }
  //   );
  // }
  //   };


//   render() {
//     return (
//       <Wrapper>
//         <Navbar score={this.state.score}
//           topScore={this.state.topScore}>Clicky Game</Navbar>
//         {this.state.instrument.map(instruments => (
//           <InstruCard
//             clickCount={this.clickCount}
//             id={instruments.id}
//             key={instruments.id}
//             image={instruments.image}
//           />
//         ))}
//       </Wrapper>
//     );
//   }
// }
