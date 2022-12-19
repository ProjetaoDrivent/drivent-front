import styled from 'styled-components';

export const SelectBox = styled.div`
  height: 145px;
  width: 145px;
  font-family: 'Roboto', sans-serif;
  margin-top: 17px;
  margin-bottom: 44px;
  background-color: ${(props) => (props.selected ? '#FFEED2' : '#FFFFFF ')};
  border: ${(props) => (props.selected ? 'none' : '1px solid #CECECE')};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 16px;
    line-height: 18.75px;
    margin-bottom: 3px;
    color: #454545;
  }

  p {
    font-size: 14px;
    line-height: 16.41px;
    color: #898989;
  }

  &:active {
    transform: scale(0.80);
  }
`;
