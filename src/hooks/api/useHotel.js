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

export function useHotelById() {
  const token = useToken();

  const {
    data: hotelsId,
    loading: hotelsIdLoading,
    error: hotelsIdError,
    act: getHotelsById,
  } = useAsync(() => hotelApi.getHotelsById(token));

  return {
    hotelsId,
    hotelsIdLoading,
    hotelsIdError,
    getHotelsById,
  };
}
