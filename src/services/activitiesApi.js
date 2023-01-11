import api from './api';

export async function getActivitiesDays(token) {
  const response = await api.get('/activities/activitiesDays', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function getActivitiesLocals(token) {
  const response = await api.get('/activities/activitiesLocals', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function getAllActivities( { token, activitiesDateId, localId } ) {
  const response = await api.get(`/activities/${activitiesDateId}/${localId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
