import styled from 'styled-components';

export default function Warning({ children }) {
  return (
    <WarningWrapper>
      <Message>{children}</Message>
    </WarningWrapper>
  );
}

const WarningWrapper = styled.div`
  max-width: 411px;
  margin: 20% 20%;
`;

const Message = styled.p`
  font-family: 'Roboto', sans-serif;
  color: #8e8e8e;
  font-size: 20px;
  line-height: 23.44px;
  text-align: center;
`;
