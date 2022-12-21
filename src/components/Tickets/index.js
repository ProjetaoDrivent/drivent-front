import styled from 'styled-components';
import { useState } from 'react';
import { Typography } from '@material-ui/core';
import useTicket from '../../hooks/api/useTicket';
import { SubTitle } from '../Commons/SubTitle';
import TicketType from './TicketType';

export default function Tickets({ selectedTicket, setSelectedTicketType, inputTickets }) {
  const { tickets } = useTicket();
  return (
    <>
      <SubTitle>Primeiro, escolha sua modalidade de ingresso</SubTitle>
      <TicketsContainer>
        {inputTickets ? (
          inputTickets.map((ticket) => (
            <TicketType
              key={ticket.id}
              ticket={ticket}
              selectedTicket={selectedTicket}
              setSelectedTicket={setSelectedTicketType}
            />
          ))
        ) : (
          <></>
        )}
      </TicketsContainer>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const TicketsContainer = styled.div`
  display: flex;
  gap: 24px;
`;
