import { SelectBox } from '../Commons/SelectBox';

export default function TicketType({ ticket, selectedTicket, setSelectedTicket }) {
  const { name, price } = ticket;
  const selectTicket = (ticket) => setSelectedTicket(ticket);
  
  return (
    <>
      <SelectBox onClick={() => selectTicket(ticket)} selected={name === selectedTicket.name}>
        <h1>{name}</h1> <p>R$ {Number(price) / 100}</p>
      </SelectBox>
    </>
  );
}
