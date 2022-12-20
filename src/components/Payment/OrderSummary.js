import styled from 'styled-components';
import { SelectBox } from '../Commons/SelectBox';
import { SubTitle } from '../Commons/SubTitle';

export default function OrderSummary() {
  return (
    <>
      <SubTitle>Ingresso escolhido</SubTitle>
      <TicketContainer>
        <h1>Presencial + Com Hotel</h1>
        <p>R$ 250</p>
      </TicketContainer>
    </>
  );
}

const TicketContainer = styled(SelectBox)`
  height: 108px;
  width: 290px;
  background-color: #ffeed2;
  border: none;
  cursor: inherit;

  h1 {
    margin-bottom: 8px;
  }

  &:active {
    transform: none;
  }
`;
