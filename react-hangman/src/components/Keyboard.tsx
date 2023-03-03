import styled from 'styled-components';
import styles from './Keyboard.module.css';

const KEYS = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

type KeyboardProps = {
  activeLetters: string[];
  disabled?: boolean;
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

export const Keyboard = ({ activeLetters, disabled = false, inactiveLetters, addGuessedLetter }: KeyboardProps) => {
  return (
    <KeyboardContainer>
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`${styles.btn} ${isActive ? styles.active : ''} ${isInactive ? styles.inactive : ''}`}
            disabled={isInactive || isActive || disabled}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </KeyboardContainer>
  );
};

const KeyboardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
  gap: 0.5rem;
`;
