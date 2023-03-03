import { useCallback, useEffect, useState } from 'react';

import { HangmanDrawing } from './components/HangmanDrawing';
import { HangmanWord } from './components/HangmanWord';
import { Keyboard } from './components/Keyboard';
import styled from 'styled-components';
import words from './wordList.json';

// first useState is to get a random word from json list

const getWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};

const App = () => {
  const [wordToGuess, setWordToGuess] = useState(getWord);

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter((letter) => !wordToGuess.includes(letter));

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess.split('').every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isLoser, isWinner],
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();

      addGuessedLetter(key);
    };
    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, [guessedLetters]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== 'Enter') return;

      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
    };

    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, []);

  console.log(wordToGuess);
  return (
    <Container>
      {isWinner && <Text>Winner! - refresh to try again</Text>}
      {isLoser && <Text>Nice try - Refresh to try again</Text>}

      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <KeyboardWrapper>
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetters={guessedLetters.filter((letter) => wordToGuess.includes(letter))}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </KeyboardWrapper>
    </Container>
  );
};

export default App;

const Container = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0 auto;
  align-items: center;
`;

const Text = styled.div`
  font-size: 2rem;
  text-align: center;
`;

const KeyboardWrapper = styled.div`
  align-self: stretch;
`;

