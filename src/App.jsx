import { useState } from 'react';

import { Hangman } from './components/Hangman/Hangman';
import { Word } from './components/Word/Word';
import { getWord } from './dict';
import { Keyboard } from './components/Keyboard/Keyboard';

import './App.css';

function App() {
  const [word, setWord] = useState(getWord);
  const [guessed, setGuessed] = useState([]);

  const handleGuess = (letter) => {
    if (guessed.includes(letter.toUpperCase())) return;

    setGuessed([...guessed, letter.toUpperCase()]);
  };

  const reset = () => {
    setWord(getWord);
    setGuessed([]);
  };

  const dmg = guessed.filter(letter => !word.includes(letter)).length;

  const lost = dmg >= 6;

  const won = word.split('').filter(letter => guessed.includes(letter)).length === word.length;

  return (
    <div className="app">
      {won && <h1>You WON!</h1>}
      {lost && <h1>You LOST!</h1>}
      <Hangman dmg={dmg} />
      <Word word={word} guessed={guessed} lost={lost} />
      {won || lost ? <button className='reset' onClick={reset}>Reset</button> :
        <Keyboard disabled={won || lost} word={word} guessed={guessed} click={handleGuess} />
      }
    </div>
  );
}

export default App;
