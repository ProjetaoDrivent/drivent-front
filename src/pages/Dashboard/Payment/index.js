import { useState } from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import useEnrollment from '../../../hooks/api/useEnrollment';
import Warning from '../../../components/WarningMessage';
import TicketTypes from '../../../components/Tickets';
import ReservationPreview from './ReservationPreview';

export default function Payment() {
  const { enrollment } = useEnrollment();
  const [selectedTicketType, setSelectedTicketType] = useState({});

  return (
    <>
      <StyledTypography variant="h4">Ingresso e Pagamento</StyledTypography>
      {enrollment?.name === undefined ? (
        <Warning>Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso</Warning>
      ) : (
        <>
          <TicketTypes 
            selectedTicket={selectedTicketType}
            setSelectedTicketType={setSelectedTicketType}
            inputTickets={[
              {
                id: 1,
                name: 'Online',
                price: 10000, 
              },
              {
                id: 2,
                name: 'Presencial',
                price: 25000
              }
            ]}
          />
        </>
      )}

      {selectedTicketType.name ? (
        <ReservationPreview selectedTicketType={selectedTicketType} />
      ) : (
        <></>
      )}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
