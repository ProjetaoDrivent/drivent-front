import useToken from '../../hooks/useToken';
import { postBooking } from '../../services/bookingApi';
import { BookButton } from '../Commons/BookButton';

export default function BookRoomButton({ roomId }) {  
  const token = useToken();
  const bookRoom = () => {
    postBooking(token, roomId);
    console.log(roomId);
  };

  return (
    <BookButton onClick={bookRoom}>
      RESERVAR QUARTO
    </BookButton>
  );
};

