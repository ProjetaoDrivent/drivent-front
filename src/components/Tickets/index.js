import styled from 'styled-components';
import * as useTickets from '../../hooks/api/useTickets';
import { SubTitle } from '../Commons/SubTitle';
import TicketTypeCard from './TicketTypeCard';

export default function TicketTypes({ selectedTicketType, setSelectedTicketType }) {
  let { ticketTypes } = useTickets.useTicketType();

  let ticketTypesToShow = [];
  
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
