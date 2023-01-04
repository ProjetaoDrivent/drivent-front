import { useState } from 'react';
import styled from 'styled-components';
import * as useHotel from '../../hooks/api/useHotel';
import { SubTitle } from '../Commons/SubTitle';
import HotelCard from './HotelCard';
import HotelRooms from './HotelRooms';

export default function Hotels() {
  const { hotels } = useHotel.useHotel();
  const [selectedHotel, setSelectedHotel] = useState(0);
 
  return (
    <>
      <SubTitle>Primeiro, escolha seu hotel</SubTitle>
      <HotelsContainer>
        <div className='cards'>
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
        </div>

        {selectedHotel ? (
          <>
            <SubTitle>Ótima pedida! Agora escolha seu quarto</SubTitle>
            <HotelRooms id={selectedHotel} />
          </>
        ) : (
          <></>
        )

        }
      </HotelsContainer>
    </>
  );
}

const HotelsContainer = styled.div`
  display: flex;
  flex-direction: column;

  .cards {
    display: flex;
    gap: 24px;
  }
`;
