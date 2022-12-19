import styled from 'styled-components';
import useTicketType from '../../hooks/api/useTicketType';
import { SubTitle } from '../Commons/SubTitle';
import TicketTypeCard from './TicketTypeCard';

export default function TicketTypes({ selectedTicketType, setSelectedTicketType }) {
  const { ticketTypes } = useTicketType();

  return (
    <>
      <SubTitle>Primeiro, escolha sua modalidade de ingresso</SubTitle>
      <TicketsContainer>
        {ticketTypes ? (
          ticketTypes.map((ticketType) => (
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
    </>
  );
}

const TicketsContainer = styled.div`
  display: flex;
  gap: 24px;
`;
