import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import Warning from '../../../components/WarningMessage';
import Hotels from '../../../components/Hotels/index';

export default function Hotel() {
  const tickets = 'PAID';

  return (
    <>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      {tickets !== 'PAID' ? (
        <Warning>Você precisa ter confirmado pagamento antes de fazer a escolha da hospedagem</Warning>
      ) : (
        <Hotels/>
      )}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
