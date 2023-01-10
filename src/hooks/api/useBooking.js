import useAsync from '../useAsync';
import useToken from '../useToken';

import * as bookingApi from '../../services/bookingApi';

export function useGetBooking() {
  const token = useToken();

  const {
    data: booking,
    loading: bookingLoading,
    error: bookingError,
    act: getBooking,
  } = useAsync(() => bookingApi.getBooking(token));

  return {
    booking,
    bookingLoading,
    bookingError,
    getBooking,
  };
}

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
