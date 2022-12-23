import { useState } from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import useEnrollment from '../../../hooks/api/useEnrollment';
import Warning from '../../../components/WarningMessage';
import TicketTypes from '../../../components/Tickets';
import ReservationPreview from './ReservationPreview';

export default function Payment() {
  const { enrollment } = useEnrollment();
  const [selectedTicketType, setSelectedTicketType] = useState(null);
  const [ticketTypes, setTicketTypes] = useState([]);
  const [selectedTicketIncludeHotel, setSelectedTicketIncludeHotel] = useState(null);

  return (
    <>
      <StyledTypography variant="h4">Ingresso e Pagamento</StyledTypography>
      {enrollment?.name === undefined ? (
        <Warning>Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso</Warning>
      ) : (
        <>
          <TicketTypes 
            selectedTicketType={selectedTicketType} 
            setSelectedTicketType={setSelectedTicketType}
            setTicketTypes={setTicketTypes} 
            selectedTicketIncludeHotel={selectedTicketIncludeHotel} 
            setSelectedTicketIncludeHotel={setSelectedTicketIncludeHotel} />
        </>
      )}

      {selectedTicketType ? (
        <ReservationPreview 
          ticketOptions={ticketTypes?.filter(ticketType => ticketType.name === selectedTicketType)} />
      ) : (
        <></>
      )}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
