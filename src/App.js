import React, { Component } from 'react';
import Header from './Header.js';
import Card from './Card.js';
import Buttons from './Buttons.js';
import './main.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allQuestions: [],
      currentQuestionsArray: [],
      currentCard: null,
      userQuestions: [],
      displayAnswer: false,
      showForm: false
    }
  }

  storeUserQuestions = () => {
    let stringyUserQuestions = JSON.stringify(this.state.userQuestions);
    localStorage.setItem('userQuestions', stringyUserQuestions);
  }

  componentDidMount = () => {
    fetch('https://memoize-datasets.herokuapp.com/api/v1/priceQuestions')
      .then(response => response.json())
      .then(data => this.setState({
        allQuestions: data.priceQuestions
      }))
      .catch(error => console.log(error));
    if (localStorage.getItem('userQuestions') !== null) {
      let stringyUserQuestions = localStorage.getItem('userQuestions');
      let storedUserQuestionsArray = JSON.parse(stringyUserQuestions);
      this.state.userQuestions = storedUserQuestionsArray;
    }
  }

  generateAllQuestions = () => {
    Object.keys(this.state.allQuestions).forEach((currentQuestionKey) => {
      this.state.allQuestions[currentQuestionKey].forEach((currentQuestion) => {
        this.state.currentQuestionsArray.push(currentQuestion);
      })
    })
    this.setCard();
  }

  generateLocalStorage = () => {
    this.state.currentQuestionsArray = [];
    this.state.currentCard = null;
    let localStorageQuestions = this.state.allQuestions.JSONquestions;
    localStorageQuestions.forEach((currentQuestion) => {
      this.state.currentQuestionsArray.push(currentQuestion);
    })
    this.setCard();
  }

  generateLinkedList = () => {
    this.state.currentQuestionsArray = [];
    this.state.currentCard = null;
    let linkedListQuestions = this.state.allQuestions.linkedListQuestions;
    linkedListQuestions.forEach((currentQuestion) => {
      this.state.currentQuestionsArray.push(currentQuestion);
    })
    this.setCard();
  }

  generateBST = () => {
    this.state.currentQuestionsArray = [];
    this.state.currentCard = null;
    let BSTQuestions = this.state.allQuestions.BSTQuestions;
    BSTQuestions.forEach((currentQuestion) => {
      this.state.currentQuestionsArray.push(currentQuestion);
    })
    this.setCard()
  }

  generateContext = () => {
    this.state.currentQuestionsArray = [];
    this.state.currentCard = null;
    let contextQuestions = this.state.allQuestions.contextQuestions;
    contextQuestions.forEach((currentQuestion) => {
      this.state.currentQuestionsArray.push(currentQuestion);
    })
    this.setCard();
  }

  generateScope = () => {
    this.state.currentQuestionsArray = [];
    this.state.currentCard = null;
    let scopeQuestions = this.state.allQuestions.scopeQuestions;
    scopeQuestions.forEach((currentQuestion) => {
      this.state.currentQuestionsArray.push(currentQuestion);
    })
    this.setCard();
  }

  generateArrayObject = () => {
    this.state.currentQuestionsArray = [];
    this.state.currentCard = null;
    let arrayAndObjectQuestions = this.state.allQuestions.arrayAndObjectQuestions;
    arrayAndObjectQuestions.forEach((currentQuestion) => {
      this.state.currentQuestionsArray.push(currentQuestion);
    })
    this.setCard();
  }

  nextCard = (event) => {
    let previousQuestion = this.state.currentCard;
    let nextQuestion = this.state.currentQuestionsArray.shift();
    this.setState({currentCard: nextQuestion})
    this.state.currentQuestionsArray.push(previousQuestion);
  }

  setCard = () => {
    let nextQuestion = this.state.currentQuestionsArray.shift();
    this.setState({currentCard: nextQuestion})
  }

  correctAnswer = (event) => {
    let currentCard = event.target.parentNode.parentNode
    currentCard.classList.add('correct-answer');
    setTimeout(function(){
      currentCard.classList.remove('correct-answer');
    }, 1000);
    setTimeout(() => {
      this.setCard();
    }, 1200);
  }

  incorrectAnswer = (event) => {
    let currentCard = event.target.parentNode.parentNode
    let thisQuestion = this.state.currentCard;
    this.state.currentQuestionsArray.push(thisQuestion);
    currentCard.classList.add('incorrect-answer');
    setTimeout(function(){
      currentCard.classList.remove('incorrect-answer');
    }, 800);
    setTimeout(() => {
      this.setCard();
    }, 1000);
  }

  saveCard = (event) => {
    let currentCard = event.target.parentNode.parentNode
    let thisQuestion = this.state.currentCard;
    this.state.userQuestions.push(thisQuestion);
    this.storeUserQuestions();
    currentCard.classList.add('saved-answer');
    setTimeout(function(){
      currentCard.classList.remove('saved-answer');
    }, 700);
    setTimeout(function(){
      currentCard.classList.add('slide-saved');
    }, 1200);
    setTimeout(() => {
      this.setCard();
    }, 1500);
    setTimeout(function(){
      currentCard.classList.remove('slide-saved');
    }, 2000);
  }

  generateUserQuestions = () => {
    this.state.currentQuestionsArray = [];
    this.state.currentCard = null;
    this.state.userQuestions.forEach((currentQuestion) => {
      this.state.currentQuestionsArray.push(currentQuestion);
    })
    this.setCard();
  }

  deleteSavedCard = (event) => {
    if (this.state.userQuestions.length === 0) {
      return;
    } else {
      let currentCard = event.target.parentNode.parentNode
      currentCard.classList.add('delete');
      setTimeout(function(){
        currentCard.classList.remove('delete');
      }, 1000);
      let currentQuestion = this.state.currentCard.prompt;
      let savedQuestionsObjectsArray = JSON.parse(localStorage.getItem('userQuestions'));
      let savedPromptsArray = savedQuestionsObjectsArray.map((currentQuestion) => {
        return currentQuestion.prompt;
      })
      let questionIndex = savedPromptsArray.indexOf(currentQuestion)
      this.state.userQuestions.splice(questionIndex, 1);
      this.setCard();
      localStorage.setItem('userQuestions', JSON.stringify(this.state.userQuestions));
    }
  }

  createCard = () => {
    this.setState({currentCard: null, showForm: true});
  }

  submitNewCard = (event) => {
    let newPrompt = event.target.parentNode.previousSibling.childNodes[1].value;
    let newAnswer = event.target.parentNode.previousSibling.childNodes[3].value;
    let currentCard = event.target.parentNode.parentNode;
    if (newPrompt !== '' && newAnswer !== '') {
      let newQuestion = { id: new Date(), prompt: newPrompt, answer: newAnswer };
      
      this.state.userQuestions.push(newQuestion);
      this.storeUserQuestions();
      currentCard.classList.add('saved-answer');
      setTimeout(function(){
        currentCard.classList.remove('saved-answer');
      }, 700);
      setTimeout(function(){
        currentCard.classList.add('slide-saved');
      }, 1200);
      setTimeout(() => {
        this.setState({currentCard: null, showForm: false})
      }, 1900);
      setTimeout(function(){
        currentCard.classList.remove('slide-saved');
      }, 2000);
    } 
  }

  cancelNewCard = () => {
    this.setState({currentCard: null, showForm: false})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Buttons generateAllQuestions={this.generateAllQuestions}
        generateLocalStorage={this.generateLocalStorage} 
        generateLinkedList={this.generateLinkedList}
        generateBST={this.generateBST}
        generateContext={this.generateContext}
        generateScope={this.generateScope}
        generateArrayObject={this.generateArrayObject}
        generateUserQuestions={this.generateUserQuestions} />
        <Card currentCard={this.state.currentCard} setCard={this.setCard} hideAnswer={this.hideAnswer} 
        incorrectAnswer={this.incorrectAnswer} correctAnswer={this.correctAnswer} 
        saveCard={this.saveCard} nextCard={this.nextCard} deleteSavedCard={this.deleteSavedCard}
        showForm={this.state.showForm} createNewCard={this.createNewCard} submitNewCard={this.submitNewCard}
        cancelNewCard={this.cancelNewCard} />
        <button onClick={this.createCard} className="new-card-btn">Create New Card!</button>
        {this.state.currentCard ? null : <p className="initial-prompt">PICK A CATEGORY!</p>}
      </div>
    );
  }
}

export default App;