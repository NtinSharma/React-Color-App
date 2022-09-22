import React, { Component } from "react";
import "./Hangman.css";
import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";
import {randomWord} from "./words";

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6]
  };

  constructor(props) {
    super(props);
    this.state = { nWrong: 0, guessed: new Set(), answer: randomWord() };
    this.handleGuess = this.handleGuess.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    return this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    let ltr = evt.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
    }));
  }

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
      <button
        value={ltr}
        key={ltr}
        className="btn"
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(ltr)}
      >
        {ltr}
      </button>
    ));
  }
  // This will Restart the game , pick the random word and reset the gussed list and number of wrong Gusses
  handleClick(){
    console.log("Restarting the Game!!!");
    this.setState(st=>({
      nWrong: 0, guessed: new Set(), answer: randomWord()
    }))
  }

  /** render: render game */
  render() {
        const guess = this.state.nWrong<this.props.maxWrong? 
        <p className='Hangman-word'>{this.guessedWord()}</p> :
        <p >Correct Answer is : {this.state.answer}</p>;
        let gameState = <p className='Hangman-btns'>{this.generateButtons()}</p>;
        if (this.guessedWord().join("")===this.state.answer) gameState = `You Win!!`
        if( this.state.nWrong>=this.props.maxWrong) gameState = `You Lose!!`;
        // const Type = this.state.nWrong>=this.props.maxWrong?<h1>You Lose </h1>: <p className='Hangman-btns'>{this.generateButtons()}</p>;
        // console.log(this.state.answer.length)
        // // console.log(this.state.guessed.length)
        // console.log(this.guessedWord());

    return (
      <div className='Hangman'>
        <h1>Hangman</h1>
        <img src={this.props.images[this.state.nWrong]} alt={`${this.state.nWrong} Wrong Gusses`}/>
        <p>Number of Wrong Guesses : {this.state.nWrong}</p>
        {guess}
        {gameState}
        {/* {Type} */}
        
        <div ><button onClick={this.handleClick} className="restartBtn">Restart</button></div>
        {/* {this.guessedWord().join("")===this.state.answer? "You win": "You Lose"} */}
      </div>
    );
  }
}

export default Hangman;
