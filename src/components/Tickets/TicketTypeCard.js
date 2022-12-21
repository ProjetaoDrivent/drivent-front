import { SelectBox } from '../Commons/SelectBox';

export default function TicketTypeCard({ name, price, selectedTicketType, setSelectedTicketType }) {  
  return (
    <>
      <SelectBox onClick={() => setSelectedTicketType(name)} selected={name === selectedTicketType}>
        <h1>{name}</h1> <p>R$ {Number(price) / 100}</p>
      </SelectBox>
    </>
  );
}
