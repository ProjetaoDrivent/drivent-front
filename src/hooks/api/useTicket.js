import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketApi from '../../services/ticketsApi';

export default function useHotel() {
  const token = useToken();

  const {
    data: tickets,
    loading: ticketLoading,
    error: ticketError,
    act: getTicketsInformations,
  } = useAsync(() => ticketApi.getTicketsInformations(token));

  return {
    tickets,
    ticketLoading,
    ticketError,
    getTicketsInformations,
  };
}
