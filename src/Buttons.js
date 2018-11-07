import React, { Component } from 'react';
import './App.js';
import './main.scss';


export default class Buttons extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  generateAllQuestions = () => {
    Object.keys(this.props.allQuestions).forEach((currentQuestionKey) => {
      this.props.allQuestions[currentQuestionKey].forEach((currentQuestion) => {
        this.props.currentQuestionsArray.push(currentQuestion);
      })
    })
    this.props.setCard();
  }

  generateLocalStorage = () => {
    this.props.currentQuestionsArray = [];
    this.props.currentCard = null;
    let localStorageQuestions = this.props.allQuestions.JSONquestions;
    localStorageQuestions.forEach((currentQuestion) => {
      this.props.currentQuestionsArray.push(currentQuestion);
    })
    this.props.setCard();
  }

  generateLinkedList = () => {
    this.props.currentQuestionsArray = [];
    this.props.currentCard = null;
    let linkedListQuestions = this.props.allQuestions.linkedListQuestions;
    linkedListQuestions.forEach((currentQuestion) => {
      this.props.currentQuestionsArray.push(currentQuestion);
    })
    this.props.setCard();
  }

  generateBST = () => {
    this.props.currentQuestionsArray = [];
    this.props.currentCard = null;
    let BSTQuestions = this.props.allQuestions.BSTQuestions;
    BSTQuestions.forEach((currentQuestion) => {
      this.props.currentQuestionsArray.push(currentQuestion);
    })
    this.props.setCard()
  }

  generateContext = () => {
    this.props.currentQuestionsArray = [];
    this.props.currentCard = null;
    let contextQuestions = this.props.allQuestions.contextQuestions;
    contextQuestions.forEach((currentQuestion) => {
      this.props.currentQuestionsArray.push(currentQuestion);
    })
    this.props.setCard();
  }

  generateScope = () => {
    this.props.currentQuestionsArray = [];
    this.props.currentCard = null;
    let scopeQuestions = this.props.allQuestions.scopeQuestions;
    scopeQuestions.forEach((currentQuestion) => {
      this.props.currentQuestionsArray.push(currentQuestion);
    })
    this.props.setCard();
  }

  generateArrayObject = () => {
    this.props.currentQuestionsArray = [];
    this.props.currentCard = null;
    let arrayAndObjectQuestions = this.props.allQuestions.arrayAndObjectQuestions;
    arrayAndObjectQuestions.forEach((currentQuestion) => {
      this.props.currentQuestionsArray.push(currentQuestion);
    })
    this.props.setCard();
  }
  
  render () {
    return (
      <div className="button-div">
        <button onClick={this.generateAllQuestions}>All Questions</button>
        <button onClick={this.generateLocalStorage}>localStorage</button>
        <button onClick={this.generateLinkedList}>Linked List</button>
        <button onClick={this.generateBST}>Binary Search Tree</button>
        <button onClick={this.generateContext}>Context</button>
        <button onClick={this.generateScope}>Scope</button>
        <button onClick={this.generateArrayObject}>Array/Object</button>
        <button onClick={this.props.generateUserQuestions}>My Saved Questions</button>
      </div>
    )
  }
}