import { useEffect } from 'react';
import styled from 'styled-components';
import * as useActivities from '../../hooks/api/useActivities';
import ActivitiesCards from './ActivitiesCards';

export default function LocalsCards({ local, selectedDay }) {
  const activitiesDateId = selectedDay;
  const localId = local.id;

  const { activities, getAllActivities } = useActivities.useAllActivities(activitiesDateId, localId);
  
  useEffect(async() => {
    await getAllActivities(activitiesDateId, localId);
  }, [activitiesDateId, localId]);

  return (
    <>
      <LocalsContainer>{local.name}
        <ActivitiesWrapper>
          {activities?.map((activitie) => (
            <ActivitiesCards key={activitie.id} activitie={activitie} />
          ))}
        </ActivitiesWrapper>
      </LocalsContainer>
    </>
  );
}

const LocalsContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 17px;
  color: #7b7b7b;
  min-height: 460px;
  width: 288px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ActivitiesWrapper = styled.div`
  width: 288px;
  min-height: 390px;
  border: 1px solid #d7d7d7;
  margin-top: 13px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;
