import React, { Component } from 'react';
import './App.js';
import './_Card.css';

export default class Card extends Component {

  
  render() {
    return (
      <div className="card">
        {this.props.currentCard ? 
        <div className="current-card">
          <p className="prompt">{this.props.currentCard.prompt}</p>
          <span className="hidden">{this.props.currentCard.answer}</span>
          <div className="card-btn-div">
            <button onClick={this.props.toggleAnswer} className="toggle-answer-btn card-btn">Toggle Answer</button>
            <button onClick={this.props.nextCard} className="next-card-btn card-btn">Skip</button>
            <button onClick={this.props.correctAnswer} className="correct-btn card-btn" title="Marks the current card as 'Correct' and removes it from your current stack (unless you a)">Correct</button>
            <button onClick={this.props.incorrectAnswer} className="incorrect-btn card-btn" title="Marks the current card as 'Incorrect' and places it at the bottom of your current stack to be asked again">Incorrect</button>
            <button onClick={this.props.saveCard} className="save-card-btn card-btn" title="Saves the current card into your 'My Saved Questions' stack">Save Card</button>
            <button onClick={this.props.deleteSavedCard} className="delete-card-btn card-btn" title="Removes the card from your 'My Saved Questions' stack">Unsave</button>
          </div>
        </div>
      : <div className="splash">Pick a category!</div> }
      </div>
    )
  }
}