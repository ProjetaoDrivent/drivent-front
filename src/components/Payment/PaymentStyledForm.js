import styled from 'styled-components';

export default styled.div`
  width: 350px;
  .date{
    width: 220px;
  }
  .cvc{
    width: 120px;
  }
  form{
    display: flex;
    flex-direction: column;
  }
  .special{
    width: 350px;
    display: flex;
    justify-content: space-between;
  }
  input{
    border-style: solid;
    box-shadow: 0, 0, 0, 0;
    outline: 0;
    height: 45px;
    border-radius: 4px;
    font-size: 20px;
    font-weight: 400;
    padding-left: 5px;
    margin-bottom: 20px;
    color: gray;
  }
  gap: 20px;
`;
