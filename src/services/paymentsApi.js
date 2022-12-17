import api from './api';

export async function getPaymentsInformations(token, ticketId) {
  const response = await api.get(`/payments?${ticketId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
