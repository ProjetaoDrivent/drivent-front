import { useState } from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import useEnrollment from '../../../hooks/api/useEnrollment';
import Warning from '../../../components/WarningMessage';
import TicketTypes from '../../../components/Tickets';
import * as useTickets from '../../../hooks/api/useTickets';

export default function Payment() {
  const { enrollment } = useEnrollment();
  const { tickets } = useTickets.useTickets();
  const [selectedTicketType, setSelectedTicketType] = useState(null);

  //verificar se é PAID futuramente e mostrar tela de confirmação de pagamento
  
  function HaveTicketReserved() {
    if (tickets?.status === 'RESERVED') {
      return (<></>);
    } else {
      return (<TicketTypes selectedTicketType={selectedTicketType} setSelectedTicketType={setSelectedTicketType} />);
    }
  };

  return (
    <>
      <StyledTypography variant="h4">Ingresso e Pagamento</StyledTypography>
      {enrollment?.name === undefined ? (
        <Warning>Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso</Warning>
      ) : (
        HaveTicketReserved()
      )}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
