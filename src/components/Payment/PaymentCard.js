import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import styled from 'styled-components';
import 'react-credit-cards-2/es/styles-compiled.css';
import PaymentForm from './PaymentStyledForm';
import { toast } from 'react-toastify';
import Button from '../Form/Button';

export default function PaymentCard( { ticketId } ) {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [focus, setFocus] = useState('');
  async function submit(event) {
    event.preventDefault();

    try {
      // console.log({
      //   ticketId: ticketId,
      //   cardData: {
      //     issuer: 'Visa',
      //     number: number,
      //     name: name,
      //     expirationDate: expiry,
      //     cvv: cvc
      //   }      
      // });
      // const paymentData = await signIn(email, password);
      // setUserData(userData);
      // toast('Pagmento realizado com sucesso!');
      // navigate('/dashboard');
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
      />
      <PaymentForm>
        <form onSubmit={submit}>
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
          </div>
          <Button type="submit">FINALIZAR PAGAMENTO</Button>
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