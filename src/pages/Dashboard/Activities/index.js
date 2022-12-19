import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import Warning from '../../../components/WarningMessage';
import * as useTickets from '../../../hooks/api/useTickets';

export default function Activities() {
  const { tickets } = useTickets.useTickets();

  return (
    <>
      <StyledTypography variant="h4">Escolha de atividades</StyledTypography>
      {tickets?.status !== 'PAID' ? (
        <Warning>Você precisa ter confirmado pagamento antes de fazer a escolha de atividades</Warning>
      ) : (
        <h1>Activities soon</h1>
      )}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
