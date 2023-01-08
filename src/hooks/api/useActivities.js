import useAsync from '../useAsync';
import useToken from '../useToken';

import * as activitiesApi from '../../services/activitiesApi';

export default function useActivitiesDays() {
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
