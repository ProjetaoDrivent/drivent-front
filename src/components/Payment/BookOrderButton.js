import { useEffect, useState } from 'react';
import { SubTitle } from '../Commons/SubTitle';
import * as useTickets from '../../hooks/api/useTickets';
import useToken from '../../hooks/useToken';
import { postTicket } from '../../services/ticketsApi';
import { BookButton } from '../Commons/BookButton';

export default function BookOrderButton({ ticketOptions }) { 
  const token = useToken(); 
  const bookOrder = () => {
    postTicket(token, ticketOptions[0].id);
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
