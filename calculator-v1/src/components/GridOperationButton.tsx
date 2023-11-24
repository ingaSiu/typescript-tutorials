import { Button, Grid, styled } from '@mui/material';

type GridOperationButtonProps = {
  operation: string;
  selectOperation: (operation: string) => void;
  selectedOperation: string;
};

const StyledButton = styled(Button)<{ selected: boolean }>((props) => ({
  backgroundColor: 'rgba(254, 241, 73, 0.1)',
  borderColor: props.selected ? 'fff' : 'rgba(255, 241, 73, 0.5)',
}));

const GridOperationButton = ({ operation, selectOperation, selectedOperation }: GridOperationButtonProps) => {
  return (
    <Grid item xs={3}>
      <StyledButton
        fullWidth
        variant="outlined"
        onClick={() => selectOperation(operation)}
        selected={selectedOperation === operation}
      >
        {operation}
      </StyledButton>
    </Grid>
  );
};

export default GridOperationButton;
