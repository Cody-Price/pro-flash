import React, { Component } from 'react';
import './App.js';
import './main.scss';

export default class Card extends Component {
  constructor() {
    super();
    this.state = {
      displayAnswer: false
    }
  }

  toggleAnswer = (event) => {
    if (this.state.displayAnswer) {
      event.target.parentNode.previousSibling.classList.add('hidden');
      event.target.parentNode.previousSibling.classList.remove('answer');
      this.setState({displayAnswer: false});
    } else if (!this.state.displayAnswer) {
      event.target.parentNode.previousSibling.classList.remove('hidden');
      event.target.parentNode.previousSibling.classList.add('answer');
      this.setState({displayAnswer: true});
    }
  }
  
  render() {
    return (
      <div className="card">
        {this.props.currentCard ? 
        <div className="current-card">
          <p className="prompt">{this.props.currentCard.prompt}</p>
          <span className="hidden">{this.props.currentCard.answer}</span>
          <div className="card-btn-div">
            <button onClick={this.toggleAnswer} className="toggle-answer-btn card-btn">Toggle Answer</button>
            <button onClick={this.props.nextCard} className="next-card-btn card-btn">Skip</button>
            <button onClick={this.props.correctAnswer} className="correct-btn card-btn" title="Marks the current card as 'Correct' and removes it from your current stack (unless you a)">Correct</button>
            <button onClick={this.props.incorrectAnswer} className="incorrect-btn card-btn" title="Marks the current card as 'Incorrect' and places it at the bottom of your current stack to be asked again">Incorrect</button>
            <button onClick={this.props.saveCard} className="save-card-btn card-btn" title="Saves the current card into your 'My Saved Questions' stack">Save Card</button>
            <button onClick={this.props.deleteSavedCard} className="delete-card-btn card-btn" title="Removes the card from your 'My Saved Questions' stack">Unsave</button>
          </div>
        </div>
      : null }
      {this.props.showForm ? 
        <div className="form-div">
          <form>
            <label value="question">Question: </label>
            <input type="text" id="prompt-form" required maxLength="100"></input>
            <label value="question">Answer: </label>
            <input type="text" id="answer-form" required maxLength="250"></input>
          </form>
          <div className="card-btn-div">
            <button onClick={this.props.submitNewCard} title="Adds your new card to the 'My Saved Questions' stack">Submit New Card!</button>
            <button onClick={this.props.cancelNewCard} title="Cancels your new card creation">Cancel</button>
          </div>
        </div>
      : null}
      </div>
    )
  }
}