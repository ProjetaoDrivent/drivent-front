import { useState, useEffect } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
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
  }, [tickets]);

  return (
    <>
      <SubTitle>Ingresso escolhido</SubTitle> 
      <TicketContainer>
        <h1>{order?.isRemote === 'Online' ? 'Online' : `${order?.isRemote} + ${order?.includesHotel}`}</h1>
        <p>R$ {order?.price }</p>
      </TicketContainer>
      <SubTitle>Pagamento</SubTitle>
      <PaymentMessage>
        <OkIcon />
        <div>
          <h3>Pagamento confirmado!</h3>
          <span>Prossiga para escolha de hospedagem e atividades</span>
        </div>
      </PaymentMessage>
    </>);
}

const PaymentMessage = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3vh;

  h3 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.4vh;
  }

  p {
    font-size: 0.8rem;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-items: center;
    color: #454545;
  }
`;

const OkIcon = styled(AiFillCheckCircle)`
  font-size: 6vh;
  color: #36B853;
  margin-right: 0.6rem;
`;
