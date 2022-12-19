import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketsApi from '../../services/ticketsApi';

export default function useHotel() {
  const token = useToken();

  const {
    data: tickets,
    loading: ticketLoading,
    error: ticketError,
    act: getTicketsInformations,
  } = useAsync(() => ticketsApi.getTicketsInformations(token));

  return {
    tickets,
    ticketLoading,
    ticketError,
    getTicketsInformations,
  };
}
