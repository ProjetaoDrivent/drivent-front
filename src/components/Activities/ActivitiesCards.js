import { AiOutlineCloseCircle } from 'react-icons/ai';
import { CgEnter } from 'react-icons/cg';
import styled from 'styled-components';

export default function ActivitiesCards({ activitie }) {
  const start = new Date(activitie.startsAt);
  const end = new Date(activitie.endsAt);
  const duration = end.getHours() - start.getHours();
  const startTime = start.toTimeString().slice(0, 5);
  const endTime = end.toTimeString().slice(0, 5);
  const vacancies = activitie.ActivitiesVacancies;
  
  return (
    <ActivityCard>
      <ActivitieDetails duration={duration}>
        <ActivitieTitle>{activitie.title}</ActivitieTitle>
        <ActivitieTime>{startTime} - {endTime}</ActivitieTime>
      </ActivitieDetails>
      <VacancyStatus>{vacancies ? (
        <WithVacancies>
          <EnterIcon />
          {vacancies} vagas
        </WithVacancies>
      ) : (
        <NoVacancy>
          <NoIcon />
          Esgotado
        </NoVacancy>
      )}
      </VacancyStatus>
    </ActivityCard>
  );
}

const ActivityCard = styled.div`
font-family: 'Roboto', sans-serif;
font-size: 12px;
color: #343434;
height: ${props => `${80 * props.duration}px`};
background-color: #F1F1F1;
border-radius: 5px;
padding: 12px 10px;
width: 100%;
display: flex;
justify-content: space-between;
`;

const VacancyStatus = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 150px;
border-left: 1px solid #CFCFCF;
`;

const WithVacancies = styled.div`
font-size: 15px;
color: #078632;
display: flex;
flex-direction: column;
align-items: center;
`;

const EnterIcon = styled(CgEnter)`
font-size: 25px;
color: #078632;
`;

const NoVacancy = styled.div`
font-size: 15px;
color: #CC6666;
display: flex;
flex-direction: column;
align-items: center;
`;

const NoIcon = styled(AiOutlineCloseCircle)`
font-size: 25px;
color: #CC6666;
`;

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
