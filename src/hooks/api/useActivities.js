import useAsync from '../useAsync';
import useToken from '../useToken';

import * as activitiesApi from '../../services/activitiesApi';

export function useActivitiesDays() {
  const token = useToken();
  const {
    data: activitiesDays,
    loading: activitiesDaysLoading,
    error: activitiesDaysError,
  } = useAsync(() => activitiesApi.getActivitiesDays(token));

  return {
    activitiesDays,
    activitiesDaysError,
    activitiesDaysLoading,
  };
}

export function useActivitiesLocals() {
  const token = useToken();
  const {
    data: activitiesLocals,
    loading: activitiesLocalsLoading,
    error: activitiesLocalsError,
  } = useAsync(() => activitiesApi.getActivitiesLocals(token));

  return {
    activitiesLocals,
    activitiesLocalsError,
    activitiesLocalsLoading,
  };
}

export function useAllActivities(activitiesDateId, localId) {
  const token = useToken();
  const {
    data: activities,
    loading: activitiesLoading,
    error: activitiesError,
    act: getAllActivities,
  } = useAsync(() => activitiesApi.getAllActivities({ token, activitiesDateId, localId }));

  return {
    activities,
    activitiesError,
    activitiesLoading,
    getAllActivities
  };
}
