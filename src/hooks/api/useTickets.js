import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketsApi from '../../services/ticketsApi';

export function useTicketType() {
  const token = useToken();

  const {
    data: ticketTypes,
    loading: ticketTypesLoading,
    error: ticketTypesError,
    act: getTicketTypes,
  } = useAsync(() => ticketsApi.getTicketTypes(token));

  return {
    ticketTypes,
    ticketTypesLoading,
    ticketTypesError,
    getTicketTypes,
  };
}

export function useTickets() {
  const token = useToken();

  const {
    data: tickets,
    loading: ticketsLoading,
    error: ticketsError,
    act: getTickets,
  } = useAsync(() => ticketsApi.getTickets(token));

  return {
    tickets,
    ticketsLoading,
    ticketsError,
    getTickets,
  };
}
