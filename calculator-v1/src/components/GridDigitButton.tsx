import { Button, Grid } from '@mui/material';

type GridDigitButtonProps = {
  digit: string;
  enterDigit: (digit: string) => void;
  xs?: number;
};

const GridDigitButton = ({ digit, enterDigit, xs = 3 }: GridDigitButtonProps) => {
  return (
    <Grid item xs={xs}>
      <Button fullWidth variant="outlined" onClick={() => enterDigit(digit)}>
        {digit}
      </Button>
    </Grid>
  );
};

export default GridDigitButton;
