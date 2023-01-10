import { useEffect, useState } from 'react';
import { SubTitle } from '../Commons/SubTitle';
import * as useTickets from '../../hooks/api/useTickets';
import useToken from '../../hooks/useToken';
import { postTicket } from '../../services/ticketsApi';
import { BookButton } from '../Commons/BookButton';

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
        <BookButton onClick={() => bookOrder()} ><span>RESERVAR INGRESSO</span></BookButton>
      ) : (
        <></>
      )

      }
    </>
  );
}
