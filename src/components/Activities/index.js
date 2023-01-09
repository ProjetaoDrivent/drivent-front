import { useState } from 'react';
import styled from 'styled-components';
import * as useActivities from '../../hooks/api/useActivities';
import { SubTitle } from '../Commons/SubTitle';
import DaysCard from './DaysCards';
import LocalsCards from './LocalsCards';

export default function Activities() {
  const { activitiesDays } = useActivities.useActivitiesDays();
  const [selectedDay, setSelectedDay] = useState(0);
  const { activitiesLocals } = useActivities.useActivitiesLocals();

  return (
    <>
      <SubTitle>Primeiro, filtre pelo dia do evento:</SubTitle>
      <Days>
        {activitiesDays?.map((day) => (
          <DaysCard key={day.id} day={day} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
        ))}
      </Days>
      <LocalsWrapper>
        {selectedDay ? (
          <>
            {activitiesLocals?.map((local) => (
              <LocalsCards key={local.id} local={local} selectedDay={selectedDay} />
            ))}
          </>
        ) : (
          <></>
        )}
      </LocalsWrapper>
    </>
  );
}

const Days = styled.div`
  margin-top: 23px;
  margin-bottom: 40px;
`;

const LocalsWrapper = styled.div`
  display: flex;
  width: 90%;
`;
