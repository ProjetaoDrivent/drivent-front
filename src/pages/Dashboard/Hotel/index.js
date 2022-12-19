import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import useTicket from '../../../hooks/api/useTicketType';
import Warning from '../../../components/WarningMessage';

export default function Hotel() {
  const { ticket } = useTicket();

  return (
    <>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      {ticket?.status !== 'PAID' ? (
        <Warning>Você precisa ter confirmado pagamento antes de fazer a escolha da hospedagem</Warning>
      ) : (
        <></>
      )}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
