import api from './api';

export async function getBookingInformation(token) {
  const response = await api.get('/booking/resumeRoom', {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  return response.data;
}
