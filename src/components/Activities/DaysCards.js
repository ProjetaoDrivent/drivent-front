import styled from 'styled-components';

export default function DaysCard({ id, day, selectedDay, setSelectedDay }) {
  const dateWeekday = day?.weekday.replace('-feira', '');
  const date = day?.date.toString().substr(5, 5);
  const dateMonth = date.slice(0, 2);
  const dateDay = date.slice(3, 5);
  console.log(selectedDay);
  return (
    <>
      <DaysButton onClick={() => setSelectedDay(day.id)} selected={day.id === selectedDay}>
        <h4>
          {dateWeekday}, {dateDay}/{dateMonth}
        </h4>
      </DaysButton>
    </>
  );
}

const DaysButton = styled.button`
  min-width: 131px;
  height: 37px;
  margin-right: 17px;
  background-color: ${(props) => (props.selected ? '#FFD37D;' : '#e0e0e0;')};
  border: none;
  border-radius: 4px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  h4 {
    font-size: 14px;
  }
`;
