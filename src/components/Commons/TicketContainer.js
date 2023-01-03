import styled from 'styled-components';
import { SelectBox } from './SelectBox';

export const TicketContainer = styled(SelectBox)`
  height: 108px;
  width: 290px;
  background-color: #ffeed2;
  border: none;
  cursor: inherit;
    
  h1 {
    margin-bottom: 8px;
   }
    
  &:active {
    transform: none;
   }
`;
