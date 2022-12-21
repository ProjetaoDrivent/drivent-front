import styled from 'styled-components';
import { useState } from 'react';
import * as useTickets from '../../hooks/api/useTickets';
import { SubTitle } from '../Commons/SubTitle';
import TicketTypeCard from './TicketTypeCard';

export default function TicketTypes({ selectedTicketType, setSelectedTicketType, setTicketTypes }) {
  const { ticketTypes } = useTickets.useTicketType();
  setTicketTypes(ticketTypes);
  const [ticketTypesToShow, setTicketTypesToShow] = useState([]);
  
  ticketTypes?.forEach((ticket) => {
    let duplicated  = ticketTypesToShow.findIndex(redticket => {
      return ticket.name === redticket.name;
    }) > -1;

    if(!duplicated) {
      ticketTypesToShow.push(ticket);
    }
  });
  
  return (
    <>
      <SubTitle>Primeiro, escolha sua modalidade de ingresso</SubTitle>
      <TicketsContainer>
        {ticketTypesToShow ? (
          ticketTypesToShow.map((ticketType) => (
            <TicketTypeCard
              key={ticketType.id}
              {...ticketType}
              selectedTicketType={selectedTicketType}
              setSelectedTicketType={setSelectedTicketType}
            />
          ))
        ) : (
          <></>
        )}
      </TicketsContainer>
    </>
  );
}

const TicketsContainer = styled.div`
  display: flex;
  gap: 24px;
`;
