import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import { RotateCard } from './components/RotateCard'
import { BasicCard } from './components/BasicCard'

// // Buttons to handle nagivation
// class Buttons extends React.Component {
//   render() {
//     return (

//     );
//   }
// }

// Main class
class App extends React.Component {
  state = {
    currentCard: 0,
    cardData: []
  }

  // Read data from JSON
  componentDidMount() {
    // Read data from local JSON file (in ./public folder)
    axios.get('./cardData.json')
      .then(res => {
        console.log(res.data);
        this.setState({
          cardData: res.data
        });
      })
      .catch(err => {
        console.log(err);
      })

    // Let the first card to be visible
    
  }

  slideRight() {
    console.log('right!');
    var curCard = this.state.currentCard;
    if (curCard >= (this.state.cardData.length - 1)) {
      curCard = 0;
    }
    else {
      curCard += 1;
    }
    this.setState({ currentCard: curCard });
  }

  slideLeft() {
    console.log('left!');
    var curCard = this.state.currentCard;
    if (curCard <= 0) {
      curCard = this.state.cardData.length - 1;
    }
    else {
      curCard -= 1;
    }
    this.setState({ currentCard: curCard });
  }

  setCardsVisibilty(id) {
    if (id === this.state.currentCard) {
      return 'block';
    }
    else {
      return 'none';
    }
  }

  render() {

    return (
      <div>
        <div>
          <button 
            id="btn-left"
            onClick={() => this.slideLeft()}
          > &larr; </button>
          <button 
            id="btn-right"
            onClick={() => this.slideRight()}
          > &rarr; </button>
        </div>

        {this.state.cardData.map(card => 
          <BasicCard
            key={card.id}
            _visible={this.setCardsVisibilty(card.id)}
            _imgLink={card.imgLink}
            _author={card.author}
            _job={card.job}
            _bio={card.bio}
          />
        )}

        <RotateCard/>

      </div>
    );
  }
}

//============================================
 
// Render Card component
ReactDOM.render(<App />, document.querySelector('.react-card'));