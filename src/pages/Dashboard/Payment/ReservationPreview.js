import styled from 'styled-components';
import { SubTitle } from '../../../components/Commons/SubTitle';
import * as useTickets from '../../../hooks/api/useTickets';

export default function ReservationPreview({ ticketOptions }) {
  const bookTicket = (ticketTypeId) => useTickets.useBookTicket(ticketTypeId);
  const bookOrder = () => {
    const book = bookTicket(ticketOptions[0].id);  
  };
  
  return (
    <>
      {(ticketOptions[0].name.toLowerCase() === 'online') ? (
        <>
          <SubTitle variant="h4">Fechado! O total ficou em R$ {Number(ticketOptions[0].price) / 100}. Agora é só confirmar:</SubTitle>
          <BookTicketButton onClick={bookOrder} ><span>RESERVAR INGRESSO</span></BookTicketButton>
        </>
      ) : (
        <>Coming Soon!</>
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
