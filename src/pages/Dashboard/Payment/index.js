import { useEffect } from 'react';
import styled from 'styled-components';
import useEnrollment from '../../../hooks/api/useEnrollment';
import { getTicketsTypes } from '../../../services/enrollmentApi';
import useToken from '../../../hooks/useToken';

export default function Payment() {
  const enrollment = useEnrollment();

  return (
    <Page>
      {
        (!enrollment) ? 
          <Grey>Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso</Grey>
          :
          <>
            <button>
              <p>Online</p>
              <span>R$ 100</span>
            </button>
          </>
      }
    </Page>
  );
}

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {background: #8E8E8E;

    height: 14vh;
    width: 10rem;
    border: solid 1px #8E8E8E;
    border-radius: 10px;
    background-color: transparent;
    p {
      font-size: 1rem;
      color: black;
    }
    span {
      font-size: 0.8rem;
      color: #8E8E8E;
    }
  }
`;

const Grey = styled.p`
  color: #8E8E8E;
  font-size: 1rem;
  text-align: center;
  margin: 30% 20%;
`;
