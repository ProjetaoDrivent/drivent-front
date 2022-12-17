import { SelectBox } from '../Commons/SelectBox';

export default function TicketType({ id, name, price, selectedTicket, setSelectedTicket }) {
  return (
    <>
      <SelectBox onClick={() => setSelectedTicket(id)} selected={id === selectedTicket}>
        <h1>{name}</h1> <p>R$ {price}</p>
      </SelectBox>
    </>
  );
}
