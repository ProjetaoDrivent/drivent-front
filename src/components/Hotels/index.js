import { useState } from 'react';
import HotelCard from './HotelCard';
import HotelRooms from './HotelRooms';
import BookingCard from '../Bookings/BookingCard';
import styled from 'styled-components';
import { SubTitle } from '../Commons/SubTitle';
import { BookButton } from '../Commons/BookButton';
import * as useHotel from '../../hooks/api/useHotel';
import * as useBooking from '../../hooks/api/useBooking';

export default function Hotels() {
  const { hotels } = useHotel.useHotel();
  const { bookings } = useBooking.useBooking();
  const [selectedHotel, setSelectedHotel] = useState(0);
  const [changeRoom, setChangeRoom] = useState(false);
  
  function selectRoomChange() {
    return(
      <>
        {changeRoom ? 
          <>
            <HotelsContainer>
              <BookingCard 
                { ... bookings } 
              />
            </HotelsContainer>
            <SubTitle>Ótima pedida! Agora escolha seu quarto</SubTitle>
            <HotelRooms id={bookings.hotelId} changeRoom={changeRoom} bookingId={bookings.id}/>
          </> 
          : 
          <>
            <SubTitle>Você já escolheu seu quarto:</SubTitle>
            <HotelsContainer>
              <BookingCard 
                { ... bookings } 
              />
            </HotelsContainer>
            <BookButton onClick={() => setChangeRoom(true)}> 
                TROCAR DE QUARTO 
            </BookButton>
          </>
        }
      </>
    );
  };

  return (
    <>
      {bookings ?
        selectRoomChange()
        :
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
      }
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
