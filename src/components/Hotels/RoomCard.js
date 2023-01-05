import { useState } from 'react';
import styled from 'styled-components';
import CapacityIcons from './CapacityIcons';

export default function RoomCard({ id, name, capacity, occupation, selectedRoom, setSelectedRoom }) {
  const focusRoom = () => {
    if(capacity === occupation) return;
    setSelectedRoom(id);
  };
  
  return (
    <Card 
      onClick={() => focusRoom()} 
      isSelected={id === selectedRoom}
      isFull={capacity === occupation} >
      <p>{name}</p>
      <CapacityIcons 
        capacity={capacity}
        occupation={occupation}
        isSelected={id === selectedRoom}
        isFull={capacity === occupation} />
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  border: solid 1px #e5e5e5;
  border-radius: 7px;
  width: 10rem;
  margin: 0.5vh 0.8rem 0.5vh 0;
  padding: 1vh 0.4rem;
  background-color: ${props => props.isSelected ? '#FFEED2' : props.isFull ? '#CECECE' : 'white' };
  
  p {
    font-size: 1.2rem;
    color: ${props => props.isFull ? '#9D9D9D' : 'black'};
  }
`;
