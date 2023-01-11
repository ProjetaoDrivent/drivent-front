import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import styled from 'styled-components';
import 'react-credit-cards-2/es/styles-compiled.css';
import PaymentForm from './PaymentStyledForm';
import { postPayment } from '../../services/paymentsApi';
import useToken from '../../hooks/useToken';
import { toast } from 'react-toastify';
import Button from '../Form/Button';

export default function PaymentCard( { ticketId, setScreenChange } ) {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [focus, setFocus] = useState('');
  const [issuer, setIssuer] = useState('');
  const token = useToken(); 

  function handleCallback({ issuer }, isValid) {
    if (isValid) {
      setIssuer(issuer);
    }
  };

  function handleForm(event)  {
    event.preventDefault();
  };

  async function submit() {
    try {
      const paymentData = {
        ticketId: ticketId,
        cardData: {
          issuer: issuer,
          number: number,
          name: name,
          expirationDate: expiry,
          cvv: cvc
        }      
      };
      if (paymentData.cardData.number !== '' && paymentData.cardData.name !== '' && 
      paymentData.cardData.expirationDate !== '' && paymentData.cardData.cvv !== '') {
        postPayment(paymentData, token);
        setScreenChange({ status: 'PAID' });
        toast('Pagamento realizado com sucesso!'); 
      } else {
        toast('Preencha todos os campos!');
      };
    } catch (err) {
      toast('Não foi possível realizar o pagamento!');
    }
  } 

  return (
    <Payment>
      <Cards 
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
        callback={handleCallback}
      />
      <PaymentForm>
        <form onSubmit={handleForm}>
          <input 
            type='tel'
            name='number'
            placeholder='Card Number'
            value={number}
            onChange={e => setNumber(e.target.value)}
            onFocus={e => setFocus(e.target.name)}
          />
          <input 
            type='text'
            name='name'
            placeholder='Name'
            value={name}
            onChange={e => setName(e.target.value)}
            onFocus={e => setFocus(e.target.name)}
          />
          <div className='special'>
            <input 
              className='date'
              type='text'
              name='expiry'
              placeholder='Valid Thru'
              value={expiry}
              onChange={e => setExpiry(e.target.value)}
              onFocus={e => setFocus(e.target.name)}
            />
            <input 
              className='cvc'
              type='tel'
              name='cvc'
              placeholder='CVC'
              value={cvc}
              onChange={e => setCvc(e.target.value)}
              onFocus={e => setFocus(e.target.name)}
            />
            <input 
              type='hidden' 
              name='issuer' 
              value={issuer} 
            />
          </div>
          <Button type="submit" onClick={() => submit()}>FINALIZAR PAGAMENTO</Button>
        </form>
      </PaymentForm>
    </Payment>
  );
}

const Payment = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 30px;
`;
