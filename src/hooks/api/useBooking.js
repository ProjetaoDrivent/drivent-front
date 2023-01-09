import useAsync from '../useAsync';
import useToken from '../useToken';

import * as bookingApi from '../../services/bookingApi';

export function useBooking() {
  const token = useToken();

  const {
    data: bookings,
    loading: bookingsLoading,
    error: bookingsError,
    act: getBookings,
  } = useAsync(() => bookingApi.getBookingInformation(token));

  return {
    bookings,
    bookingsLoading,
    bookingsError,
    getBookings,
  };
}
