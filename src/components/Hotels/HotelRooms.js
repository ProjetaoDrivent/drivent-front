import styled from 'styled-components';
import { useState, useEffect } from 'react';
import * as useHotel from '../../hooks/api/useHotel';
import RoomCard from './RoomCard';
import BookRoomButton from './BookRoomButton';

export default function HotelRooms({ id }) {
  const [roomData, setRoomData] = useState();
  const [selectedRoom, setSelectedRoom] = useState(0);
  const { getRooms } = useHotel.useRooms(id);

  useEffect(async() => {
    const { Rooms } = await getRooms();
    setRoomData(Rooms);      
  }, [id]);

  return (
    <>
      <Rooms>
        {roomData?.map(room => 
          <RoomCard 
            key={room.id}
            id={room.id}
            name={room.name}
            capacity={room.capacity}
            occupation={room.Booking.length}
            selectedRoom={selectedRoom}
            setSelectedRoom={setSelectedRoom} />
        )
        }
      </Rooms>
      {selectedRoom ? 
        <BookRoomButton />
        : 
        <></>
      }
    </>
  );
};

const Rooms = styled.div`
  margin-top: 5vh;
  display: flex;
  flex-wrap: wrap;
`;
