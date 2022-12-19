import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import useTicket from '../../hooks/api/useTicket';
import { SubTitle } from '../Commons/SubTitle';
import TicketType from './TicketType';

export default function Tickets({ selectedTicket, setSelectedTicket }) {
  const { tickets } = useTicket();

  return (
    <>
      <StyledTypography variant="h4">Ingresso e Pagamento</StyledTypography>
      <SubTitle>Primeiro, escolha sua modalidade de ingresso</SubTitle>
      <TicketsContainer>
        {tickets ? (
          tickets.map((ticket) => (
            <TicketType
              key={ticket.id}
              {...ticket}
              selectedTicket={selectedTicket}
              setSelectedTicket={setSelectedTicket}
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
