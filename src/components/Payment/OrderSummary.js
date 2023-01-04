import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import * as useTickets from '../../hooks/api/useTickets';
import { SelectBox } from '../Commons/SelectBox';
import { SubTitle } from '../Commons/SubTitle';
import Button from '../Form/Button';
import PaymentCard from './PaymentCard';
import { TicketContainer } from '../Commons/TicketContainer';

export default function OrderSummary() {
  const { tickets } = useTickets.useTickets();
  const [order, setOrder] = useState({});

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
        <h1>{order.isRemote === 'Online' ? 'Online' : `${order.isRemote} + ${order.includesHotel}`}</h1>
        <p>R$ {order.price}</p>
      </TicketContainer>
      <PaymentForm>
        <SubTitle>Pagamento</SubTitle>
        <PaymentCard ticketId={tickets?.id}/>
      </PaymentForm>
    </>
  );
}

const PaymentForm = styled.div`
  height: 200px;
  margin-bottom: 50px;
`;
