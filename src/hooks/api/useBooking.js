import useAsync from '../useAsync';
import useToken from '../useToken';

import * as bookingApi from '../../services/bookingApi';

export function usePostBooking() {
  const token = useToken();

  const {
    data: booking,
    loading: bookingLoading,
    error: bookingError,
    act: postBooking,
  } = useAsync(() => bookingApi.postBooking(token)); // hotelApi.getHotels(token)

  return {
    booking,
    bookingLoading,
    bookingError,
    postBooking,
  };
}
