import { useState } from 'react';
import Tickets from '../../../components/Tickets';

export default function Payment() {
  const [selectedTicket, setSelectedTicket] = useState(null);

  return (
    <>
      <Tickets selectedTicket={selectedTicket} setSelectedTicket={setSelectedTicket} />
    </>
  );
}
