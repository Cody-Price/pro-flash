import React, { Component } from 'react';
import './App.js';
import './main.scss';


export default class Buttons extends Component {

  
  render () {
    return (
      <div className="button-div">
        <button onClick={this.props.generateAllQuestions}>All Questions</button>
        <button onClick={this.props.generateLocalStorage}>localStorage</button>
        <button onClick={this.props.generateLinkedList}>Linked List</button>
        <button onClick={this.props.generateBST}>Binary Search Tree</button>
        <button onClick={this.props.generateContext}>Context</button>
        <button onClick={this.props.generateScope}>Scope</button>
        <button onClick={this.props.generateArrayObject}>Array/Object</button>
        <button onClick={this.props.generateUserQuestions}>My Saved Questions</button>
      </div>
    )
  }
}