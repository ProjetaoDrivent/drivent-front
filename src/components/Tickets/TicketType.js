import { SelectBox } from '../Commons/SelectBox';

export default function TicketType({ name, price, selectedTicket, setSelectedTicket }) {
  return (
    <>
      <SelectBox onClick={() => setSelectedTicket(name)} selected={name === selectedTicket}>
        <h1>{name}</h1> <p>R$ {price}</p>
      </SelectBox>
    </>
  );
}
