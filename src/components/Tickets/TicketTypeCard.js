import { SelectBox } from '../Commons/SelectBox';

export default function TicketTypeCard({ name, price, selectedTicketType, setSelectedTicketType }) {
  const select = () => {
    setSelectedTicketType(name);
    console.log(selectedTicketType, name);
  };
  
  return (
    <>
      <SelectBox onClick={select} selected={name === selectedTicketType}>
        <h1>{name}</h1> <p>R$ {Number(price) / 100}</p>
      </SelectBox>
    </>
  );
}
