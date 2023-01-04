import styled from 'styled-components';

export default function RoomCard({ name, capacity }) {
  return (
    <Card>
      <p>{name}</p>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  border: solid 1px #e5e5e5;
  border-radius: 7px;
  width: 10rem;
  margin-right: 0.8rem;
  padding: 0.7vh 0.4rem;

  p {
    font-size: 1.2rem;
    /* font-weight: bold; */
  }
`;
