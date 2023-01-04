import useAsync from '../useAsync';
import useToken from '../useToken';

import * as hotelApi from '../../services/hotelApi';

export function useHotel() {
  const token = useToken();

  const {
    data: hotels,
    loading: hotelsLoading,
    error: hotelsError,
    act: getHotels,
  } = useAsync(() => hotelApi.getHotels(token));

  return {
    hotels,
    hotelsLoading,
    hotelsError,
    getHotels,
  };
}

export function useRooms(hotelId) {
  const token = useToken();

  const {
    data: rooms,
    loading: roomsLoading,
    error: roomsError,
    act: getRooms,
  } = useAsync(() => hotelApi.getRooms(token, hotelId));

  return {
    rooms,
    roomsLoading,
    roomsError,
    getRooms,
  };
}
