import { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as useHotel from '../../hooks/api/useHotel';
import { SelectBox } from '../Commons/SelectBox';

export default function HotelCard({ id, image, name, selectedHotel, setSelectedHotel }) {
  const { getRooms } = useHotel.useRooms(id);
  const [roomData, setRoomData] = useState();

  useEffect(async() => {
    const { Rooms } = await getRooms();
    setRoomData(Rooms);
  }, []);

  let single = false;
  let double = false;
  let triple = false;
  let capacity = 0;
  let bookings = 0;  

  if (roomData) {
    roomData.map(room => {
      capacity += room.capacity;
      bookings += room.Booking.length;
      if (room.capacity === 1) return single = true;
      if (room.capacity === 2) return double = true;
      if (room.capacity >= 3) return triple = true;
      return false;
    });
  }
  const vacancies = capacity - bookings;

  let hotelRomms = [];
  if (single) hotelRomms.push('Single');
  if (double) hotelRomms.push('Double');
  if (triple) hotelRomms.push('Triple');
  let roomTypes;
  if (hotelRomms.length === 1) roomTypes = hotelRomms[0];
  if (hotelRomms.length === 2) roomTypes = `${hotelRomms[0]} e ${hotelRomms[1]}`;
  if (hotelRomms.length === 3) roomTypes = `${hotelRomms[0]}, ${hotelRomms[1]} e ${hotelRomms[2]}`;

  return (
    <>
      <SelectHotelBox onClick={() => setSelectedHotel(id)} selected={id === selectedHotel}>
        <img src={image} alt={name} />
        <h1>{name}</h1>
        <h3>Tipos de acomodação</h3>
        <h4>{roomTypes}</h4>
        <h3>Vagas disponíveis</h3>
        <h4>{vacancies}</h4>
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
