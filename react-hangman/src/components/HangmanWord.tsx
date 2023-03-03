import styled from 'styled-components';

type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

export const HangmanWord = ({ guessedLetters, wordToGuess, reveal = false }: HangmanWordProps) => {
  return (
    <WordContainer>
      {wordToGuess.split('').map((letter, index) => (
        <LetterWrapper key={index}>
          <span
            style={{
              visibility: guessedLetters.includes(letter) || reveal ? 'visible' : 'hidden',
              color: !guessedLetters.includes(letter) && reveal ? 'red' : 'black',
            }}
          >
            {letter}
          </span>
        </LetterWrapper>
      ))}
    </WordContainer>
  );
};

const WordContainer = styled.div`
  display: flex;
  gap: 0.25em;
  font-size: 6rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family: monospace;
`;

const LetterWrapper = styled.span`
  border-bottom: 0.1em solid black;
`;

// const Letter = styled.span`
//   visibility: guessedLetters.includes(letter) ? "visible" : "hidden"
// `;
