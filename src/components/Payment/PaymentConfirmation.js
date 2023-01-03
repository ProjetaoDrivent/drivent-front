import { useState, useEffect } from 'react';
import * as useTickets from '../../hooks/api/useTickets';
import { TicketContainer } from '../Commons/TicketContainer';
import { SubTitle } from '../Commons/SubTitle';
import styled from 'styled-components';

export default function PaymentConfirmation() {
  const { tickets } = useTickets.useTickets(); 
  const [order, setOrder] = useState();

  useEffect(() => {
    if (tickets) {
      const order = tickets.TicketType;
      setOrder({
        isRemote: order.isRemote ? 'Online' : 'Presencial',
        includesHotel: order.includesHotel ? 'Com Hotel' : 'Sem Hotel',
        price: order.includesHotel ? 600 : order.price,
      });
    }
  }, []);

  return (
    <>
      <SubTitle>Ingresso escolhido</SubTitle> 
      <TicketContainer>
        <>aaa</>
      </TicketContainer>
      <SubTitle>Pagamento</SubTitle>
      <PaymentMessage>
        <h3>Pagamento confirmado!</h3>
        <span>Prossiga para escolha de hospedagem e atividades</span>
      </PaymentMessage>
    </>);
}

const PaymentMessage = styled.div`
  margin-top: 3vh;

  h3 {
    font-size: 1rem;
    font-weight: 600;
  }
`;
