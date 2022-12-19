import styled from 'styled-components';
import { SelectBox } from '../Commons/SelectBox';

export default function HotelCard({ id, image, name, selectedHotel, setSelectedHotel }) {
  return (
    <>
      <SelectHotelBox onClick={() => setSelectedHotel(id)} selected={id === selectedHotel}>
        <img src={image} alt={name}/>
        <h1>{name}</h1>
      </SelectHotelBox>
    </>
  );
}

const SelectHotelBox = styled(SelectBox)`
width: 196px;
height: 264px;
padding: 16px 14px;
background-color: ${(props) => (props.selected ? '#FFEED2' : '#EBEBEB ')};
border: none;
border-radius: 10px;
justify-content: flex-start;
align-items: flex-start;

h1 {
    font-size: 20px;
    line-height: 23.44px;
    margin-top: 10px;
    color: #343434;
  }

  img {
    width: 168px;
    height: 109px;
    border-radius: 5px;
  }

  &:active {
    transform: scale(0.80);
  }

`;
