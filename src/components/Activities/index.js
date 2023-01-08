import { useState } from 'react';
import styled from 'styled-components';
import useActivitiesDays from '../../hooks/api/useActivities';
import { SubTitle } from '../Commons/SubTitle';
import DaysCard from './DaysCards';

export default function Activities() {
  const { activitiesDays } = useActivitiesDays();
  const [selectedDay, setSelectedDay] = useState(0);

  return (
    <>
      <SubTitle>Primeiro, filtre pelo dia do evento:</SubTitle>
      <Days>
        {' '}
        {activitiesDays?.map((day) => (
          <DaysCard key={day.id} day={day} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
        ))}
      </Days>
    </>
  );
}

const Days = styled.div`
  margin-top: 23px;
`;
