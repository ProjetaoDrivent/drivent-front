import React, { useState } from 'react';
import Cards from 'react-credit-cards';

export default function PaymentCard() {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [focus, setFocus] = useState('');

  return (
    <div>
      <form>
        <Cards/>
        <imput 
          type='tel'
          name='number'
          placeholdeer='Card Number'
          value={number}
          onChange={e => setNumber(e.target.value)}
          onFocus={e => setFocus(e.target.name)}
        />
        <imput 
          type='text'
          name='name'
          placeholdeer='Name'
          value={name}
          onChange={e => setName(e.target.value)}
          onFocus={e => setFocus(e.target.name)}
        />
        <imput 
          type='text'
          name='expiry'
          placeholdeer='MM/YY Expiry'
          value={expiry}
          onChange={e => setExpiry(e.target.value)}
          onFocus={e => setFocus(e.target.name)}
        />
        <imput 
          type='tel'
          name='cvc'
          placeholdeer='CVC'
          value={cvc}
          onChange={e => setCvc(e.target.value)}
          onFocus={e => setFocus(e.target.name)}
        />
      </form>
    </div>
  );
}
