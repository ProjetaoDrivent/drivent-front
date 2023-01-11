import dayjs from 'dayjs';
import styled from 'styled-components';

export default function ActivitiesCards({ activitie }) {
  const startsAt = dayjs(activitie.startsAt).add(3, 'h');
  const endsAt = dayjs(activitie.endsAt).add(3, 'h');
  const start = new Date(startsAt);
  const end = new Date(endsAt);
  const duration = (end - start)/(3600000);
  const startTime = start.toTimeString().slice(0, 5);
  const endTime = end.toTimeString().slice(0, 5);
  
  return <><ActivitieDetails duration={duration}>
    <ActivitieTitle>{activitie.title}</ActivitieTitle>
    <ActivitieTime>{startTime} - {endTime}</ActivitieTime>
  </ActivitieDetails></>;
}

const ActivitieDetails = styled.div`
font-family: 'Roboto', sans-serif;
font-size: 12px;
color: #343434;
width: 100%;
height: ${props => `${80 * props.duration}px`};
background-color: #F1F1F1;
border-radius: 5px;
padding: 12px 10px;
margin-bottom: 10px;
`;

const ActivitieTitle = styled.h4`
font-weight: 700;
margin-bottom: 6px;
`;

const ActivitieTime = styled.h6 `
font-weight: 400;
`;
