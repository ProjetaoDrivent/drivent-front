import styled from 'styled-components';
import { useState } from 'react';
import * as useTickets from '../../hooks/api/useTickets';
import { SubTitle } from '../Commons/SubTitle';
import TicketTypeCard from './TicketTypeCard';
import Button from '../Form/Button';
import BookOrderButton from '../Payment/BookOrderButton';

export default function TicketTypes({ selectedTicketType, setSelectedTicketType, setTicketTypes, selectedTicketIncludeHotel, setSelectedTicketIncludeHotel, totalPrice, setTotalPrice }) {
  let { ticketTypes } = useTickets.useTicketType();
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

  let ticketTypeOnline = ticketTypes?.filter( ticket => {
    return ticket.name !== 'Presencial';
  });

  function ChangePrice(value) {
    setTotalPrice(value);
  };

  if (selectedTicketType === 'Online') {
    const value = ticketTypeOnline[0].price;
    ChangePrice(value);
  };

  if (selectedTicketType === 'Presencial') {
    let value = ticketTypeIncludeHotel[0].price;
    if(selectedTicketIncludeHotel === 'Com Hotel') {
      value += 350; 
    }
    ChangePrice(value);
  };

  function ShowPrice() {
    if (selectedTicketType === null) {
      return(<></>);
    } else {
      if ( selectedTicketType === 'Presencial' && selectedTicketIncludeHotel === null) {
        return(<></>);
      }
      return(
        <>
          <SubTitle>Fechado! O total ficou em <strong>R$ {totalPrice}</strong>. Agora é só confirmar</SubTitle>
          <BookOrderButton 
            ticketOptions={ticketTypes?.filter(ticketType => ticketType.name === selectedTicketType)} ticketIncludeHotel={selectedTicketIncludeHotel} />
        </>
      );
    }
  };

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
      {ShowPrice()}
    </>
  );
}

const TicketsContainer = styled.div`
  display: flex;
  gap: 24px;
`;
