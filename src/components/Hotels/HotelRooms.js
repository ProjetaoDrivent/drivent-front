import styled from 'styled-components';
import { useState, useEffect } from 'react';
import * as useHotel from '../../hooks/api/useHotel';
import RoomCard from './RoomCard';

export default function HotelRooms({ id }) {
  const [roomData, setRoomData] = useState();
  const [selectedRoom, setSelectedRoom] = useState(0);
  const { getRooms } = useHotel.useRooms(id);

  useEffect(async() => {
    const { Rooms } = await getRooms();
    setRoomData(Rooms);
    console.log(roomData);       
  }, [id]);

  return (
    <Rooms>
      {roomData?.map(room => 
        <RoomCard 
          key={room.id}
          id={room.id}
          name={room.name}
          capacity={room.capacity}
          occupation={1}
          selectedRoom={selectedRoom}
          setSelectedRoom={setSelectedRoom} />
      )

      }
    </Rooms>
  );
};

const Rooms = styled.div`
  margin-top: 5vh;
  display: flex;
  flex-wrap: wrap;
  
`;
