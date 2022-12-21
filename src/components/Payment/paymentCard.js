import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import styled from 'styled-components';
import 'react-credit-cards-2/es/styles-compiled.css';

export default function PaymentCard() {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [focus, setFocus] = useState('');

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
        <form>
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

const PaymentForm = styled.div`
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
