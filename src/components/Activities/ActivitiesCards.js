import styled from 'styled-components';

export default function ActivitiesCards({ activitie }) {
  const start = new Date(activitie.startsAt);
  const end = new Date(activitie.endsAt);
  const duration = end.getHours() - start.getHours();
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
`;

const ActivitieTitle = styled.h4`
font-weight: 700;
margin-bottom: 6px;
`;

const ActivitieTime = styled.h6 `
font-weight: 400;
`;