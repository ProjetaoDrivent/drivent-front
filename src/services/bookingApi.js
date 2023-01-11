import api from './api';

export async function postBooking(token, roomId) {
  const response = await api.post('/booking', { roomId }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function getBooking(token) {
  const response = await api.get('/booking', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function getBookingInformation(token) {
  const response = await api.get('/booking/resumeRoom', {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  return response.data;
}
