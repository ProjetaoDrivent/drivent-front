import useToken from '../../hooks/useToken';
import { changeBooking } from '../../services/bookingApi';
import { BookButton } from '../Commons/BookButton';

export default function changeRoomButton({ bookingId, roomId }) {  
  const token = useToken();
  const changeRoom = () => {
    changeBooking(token, bookingId, roomId);
  };

  return (
    <BookButton onClick={changeRoom}>
      RESERVAR QUARTO
    </BookButton>
  );
};
