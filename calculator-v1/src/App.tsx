import { Container, Paper, styled } from '@mui/material';

const CalculatorBase = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(4),
  borderRadius: 15,
}));

const App = () => {
  return (
    <Container maxWidth="sm">
      <CalculatorBase elevation={3}>Hi there</CalculatorBase>
    </Container>
  );
};

export default App;

