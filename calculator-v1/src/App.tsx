import { Button, Container, Grid, Paper, styled } from '@mui/material';

import GridDigitButton from './components/GridDigitButton';
import GridOperationButton from './components/GridOperationButton';
import { useState } from 'react';

const OutputContainer = styled('div')(({ theme }) => ({
  width: '100%',
  textAlign: 'right',
  height: '2em',
  padding: theme.spacing(2),
  fontSize: '3em',
  overflow: 'hidden',
}));

const CalculatorBase = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(4),
  borderRadius: 15,
}));

const App = () => {
  const [currentValue, setCurrentValue] = useState('0');
  const [operation, setOperation] = useState('');
  const [prevValue, setPrevValue] = useState('');
  const [overwrite, setOverwrite] = useState(true);

  const calculate = () => {
    if (!prevValue || !operation) return currentValue;

    const curr = parseFloat(currentValue);
    const prev = parseFloat(prevValue);

    let result;

    switch (operation) {
      case '÷':
        result = prev / curr;
        break;
      case '*':
        result = prev * curr;
        break;
      case '-':
        result = prev - curr;
        break;
      case '+':
        result = prev + curr;
        break;
    }
    return result;
  };

  const equals = () => {
    const val = calculate();
    setCurrentValue(`${val}`);
    setPrevValue('');
    setOperation('');
    setOverwrite(true);
  };

  const clear = () => {
    setPrevValue('');
    setOperation('');
    setCurrentValue('0');
    setOverwrite(true);
  };

  const deleteNumber = () => {
    if (currentValue.length === 1) {
      setCurrentValue('0');
      setOverwrite(true);
    } else {
      setCurrentValue(currentValue.slice(0, -1));
    }
  };

  const percent = () => {
    const curr = parseFloat(currentValue);
    setCurrentValue((curr / 100).toString());
  };

  const selectOperation = (operation: string) => {
    if (prevValue) {
      const val = calculate();
      setCurrentValue(`${val}`);
      setPrevValue(`${val}`);
    } else {
      setPrevValue(currentValue);
    }

    setOperation(operation);
    setOverwrite(true);
  };

  const setDigit = (digit: string) => {
    if (currentValue[0] === '0' && digit === '0') return;
    if (currentValue.includes('.') && digit === '.') return;
    if (overwrite && digit !== '.') {
      setCurrentValue(digit);
    } else {
      setCurrentValue(`${currentValue}${digit}`);
    }
    setOverwrite(false);
  };

  return (
    <Container maxWidth="sm">
      <CalculatorBase elevation={3}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <OutputContainer data-testid="output">{currentValue}</OutputContainer>
          </Grid>
          <Grid item container columnSpacing={1}>
            <GridOperationButton operation={'AC'} selectOperation={clear} selectedOperation={operation} />
            <GridOperationButton operation={'C'} selectOperation={deleteNumber} selectedOperation={operation} />
            <GridOperationButton operation={'%'} selectOperation={percent} selectedOperation={operation} />
            <GridOperationButton operation={'÷'} selectOperation={selectOperation} selectedOperation={operation} />
          </Grid>
          <Grid item container columnSpacing={1}>
            <GridDigitButton digit={'7'} enterDigit={setDigit} />
            <GridDigitButton digit={'8'} enterDigit={setDigit} />
            <GridDigitButton digit={'9'} enterDigit={setDigit} />
            <GridOperationButton operation={'*'} selectOperation={selectOperation} selectedOperation={operation} />
          </Grid>
          <Grid item container columnSpacing={1}>
            <GridDigitButton digit={'4'} enterDigit={setDigit} />
            <GridDigitButton digit={'5'} enterDigit={setDigit} />
            <GridDigitButton digit={'6'} enterDigit={setDigit} />
            <GridOperationButton operation={'-'} selectOperation={selectOperation} selectedOperation={operation} />
          </Grid>
          <Grid item container columnSpacing={1}>
            <GridDigitButton digit={'1'} enterDigit={setDigit} />
            <GridDigitButton digit={'2'} enterDigit={setDigit} />
            <GridDigitButton digit={'3'} enterDigit={setDigit} />
            <GridOperationButton operation={'+'} selectOperation={selectOperation} selectedOperation={operation} />
          </Grid>
          <Grid item container columnSpacing={1}>
            <GridDigitButton digit={'0'} enterDigit={setDigit} xs={6} />
            <GridDigitButton digit={'.'} enterDigit={setDigit} />
            <Grid item xs={3}>
              <Button fullWidth variant="contained" onClick={equals}>
                =
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </CalculatorBase>
    </Container>
  );
};

export default App;

