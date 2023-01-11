import { useEffect } from 'react';
import { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { BsPersonFill } from 'react-icons/bs';
import styled from 'styled-components';

export default function CapacityIcons({ capacity, occupation, isSelected, isFull }) {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    const toSetSpots = [];

    for(let i = 0; i < capacity; i++) {
      toSetSpots.push('vacant');
    }
    
    for(let i = 0; i < occupation; i++) {
      toSetSpots[toSetSpots.length - 1 - i] = 'occupied';
    }

    setSpots(toSetSpots);
  }, []);

  return <>{spots ? 
    <SpotsContainer>{spots?.map((spot, i) => (spot === 'occupied') ? 
      <PersonIconFill key={i} isSelected={isSelected} isFull={isFull} /> 
      : 
      <PersonIcon key={i} />)}
    </SpotsContainer> 
    : 
    <></>
    
  }</>;
};

const SpotsContainer = styled.div`
    display: flex;
`;

const PersonIcon = styled(BsPerson)`
    font-size: 1rem;
    color: black;
`;

const PersonIconFill = styled(BsPersonFill)`
    font-size: 1rem;
    color: ${props => props.isSelected ? '#FF4791' : props.isFull ? '#8C8C8C' : 'black'};
`;
