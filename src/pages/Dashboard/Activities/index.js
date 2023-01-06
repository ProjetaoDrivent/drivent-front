import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import Warning from '../../../components/WarningMessage';
import * as useTickets from '../../../hooks/api/useTickets';
import Activities from '../../../components/Activities';

export default function ActivitiesPage() {
  const { tickets } = useTickets.useTickets();
  
  function IncludesActivities() {
    if (tickets?.TicketType.isRemote === false) {
      return (<Activities/>);
    } else {
      return (<Warning>Sua modalidade de ingresso não necessita escolher
        atividade. Você terá acesso a todas as atividades.</Warning>);
    }
  };

  return (
    <>
      <StyledTypography variant="h4">Escolha de atividades</StyledTypography>
      {tickets?.status !== 'PAID' ? (
        <Warning>Você precisa ter confirmado pagamento antes de fazer a escolha de atividades</Warning>
      ) : (  
        IncludesActivities()
      )}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
