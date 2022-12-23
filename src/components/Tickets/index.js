import styled from 'styled-components';
import { useState } from 'react';
import * as useTickets from '../../hooks/api/useTickets';
import { SubTitle } from '../Commons/SubTitle';
import TicketTypeCard from './TicketTypeCard';

export default function TicketTypes({ selectedTicketType, setSelectedTicketType, setTicketTypes, selectedTicketIncludeHotel, setSelectedTicketIncludeHotel }) {
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
  
  let ticketTypeIncludeHotel = ticketTypes?.filter( ticket => {
    return ticket.name !== 'Online';
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
      
      {selectedTicketType === 'Presencial' ? (
        <>
          <SubTitle>Ótimo! Agora escolha sua modalidade de hospedagem</SubTitle>
          <TicketsContainer>
            {ticketTypeIncludeHotel ? (
              ticketTypeIncludeHotel.map((ticketIncludeHotel) => (
                <TicketTypeCard
                  key={ticketIncludeHotel.id}
                  { ... { ...ticketIncludeHotel, 
                    name: ticketIncludeHotel.includesHotel? 'Sem Hotel':'Com Hotel', 
                    price: ticketIncludeHotel.includesHotel? 0:350 } }
                  selectedTicketType={selectedTicketIncludeHotel}
                  setSelectedTicketType={setSelectedTicketIncludeHotel}
                />
              ))
            ) : (
              <></>
            )}
          </TicketsContainer>
        </>
      ) :
        <></>
      }
    </>
  );
}

const TicketsContainer = styled.div`
  display: flex;
  gap: 24px;
`;
