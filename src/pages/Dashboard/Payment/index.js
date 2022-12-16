import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import { SelectBox } from '../../../components/Commons/SelectBox';
import { Title } from '../../../components/Commons/Title';

export default function Payment() {
  return (
    <>
      <StyledTypography variant="h4">Ingresso e Pagamento</StyledTypography>
      <Title>Primeiro, escolha sua modalidade de ingresso</Title>
      <SelectOptions>
        <SelectBox>
          <h1>Presencial</h1>
          <p>R$ 250</p>
        </SelectBox>
        <SelectBox>
          <h1>Online</h1>
          <p>R$ 100</p>
        </SelectBox>
      </SelectOptions>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const SelectOptions = styled.div`
  display: flex;
  gap: 24px;
`;
