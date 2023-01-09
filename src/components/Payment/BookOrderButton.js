import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SubTitle } from '../Commons/SubTitle';
import * as useTickets from '../../hooks/api/useTickets';
import useToken from '../../hooks/useToken';
import { postTicket } from '../../services/ticketsApi';

export default function BookOrderButton({ ticketOptions, ticketIncludeHotel, setScreenChange }) { 
  const token = useToken(); 
  const bookOrder = () => {
    let ticketId = ticketOptions;
    console.log(ticketIncludeHotel);
    if (ticketIncludeHotel === 'Com Hotel') {
      ticketId = ticketOptions.filter( ticket => {
        return ticket.includesHotel === true;
      });
    } else if (ticketIncludeHotel === 'Sem Hotel') {
      ticketId = ticketOptions.filter( ticket => {
        return ticket.includesHotel === false;
      });
    }
    postTicket(token, ticketId[0].id);
    setScreenChange({ status: 'RESERVED' });
  };
  
  return (
    <>
      {(ticketOptions[0].name.toLowerCase() === 'online'|| 'presencial') ? (
        <BookTicketButton onClick={() => bookOrder()} ><span>RESERVAR INGRESSO</span></BookTicketButton>
      ) : (
        <></>
      )

      }
    </>
  );
}

const BookTicketButton = styled.button`
    width: 10rem;
    height: 5vh;
    margin-top: 4vh;
    border: none;
    border-radius: 6px;
    background-color: #E0E0E0;
    box-shadow: 0 0 0.9vh 0 grey;
    
    :hover {
        background-color: #D0D0D0
    }

    span {
        font-size: 0.7rem;
        margin: 0.3rem;
    }
`;
