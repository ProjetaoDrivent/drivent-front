import { useState } from 'react';
import styled from 'styled-components';
import * as useHotel from '../../hooks/api/useHotel';
import { SubTitle } from '../Commons/SubTitle';
import HotelCard from './HotelCard';

export default function Hotels() {
  const { hotels } = useHotel.useHotel();
  const [selectedHotel, setSelectedHotel] = useState(0);
 
  return (
    <>
      <SubTitle>Primeiro, escolha seu hotel</SubTitle>
      <HotelsContainer>
        {hotels ? (
          hotels.map((hotel) => (
            <HotelCard
              key={hotel.id}
              {...hotel}
              selectedHotel={selectedHotel}
              setSelectedHotel={setSelectedHotel}
            />
          ))
        ) : (
          <></>
        )}
      </HotelsContainer>
    </>
  );
}

const HotelsContainer = styled.div`
  display: flex;
  gap: 24px;
`;
