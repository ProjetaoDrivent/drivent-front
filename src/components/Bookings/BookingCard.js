import styled from 'styled-components';

export default function BookingCard({ capacity, image, name, hotelName, occupation }) {
  function typeRoom() {
    if (capacity === 1) return '(Single)';
    if (capacity === 2) return '(Double)';
    if (capacity >= 3) return '(Triple)';
    return '';
  }

  return (
    <>
      <SelectHotelBox>
        <img src={image} alt={hotelName} />
        <h1>{hotelName}</h1>
        <h3>Quarto Reservado</h3>
        <h4>{name} {typeRoom()}</h4>
        <h3>Pessoas no seu quarto</h3>
        <h4>{ occupation - 1 === 0 ? 'Somente você' : `Você e mais ${Number(occupation) - 1}`}</h4>
      </SelectHotelBox>
    </>
  );
}

const SelectHotelBox = styled.div`
  width: 196px;
  height: 264px;
  margin-top: 17px;
  padding: 16px 14px;
  background-color: ${(props) => (props.selected ? '#FFEED2' : '#FFEED2 ')};
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

  h3 {
    font-weight: 700;
    font-size: 12px;
    line-height: 14.06px;
    margin-top: 10px;
    color: #3C3C3C;
  }

  h4 {
    font-weight: 400;
    font-size: 12px;
    line-height: 14.06px;
    margin-top: 2px;
    color: #3C3C3C;
  }
`;
