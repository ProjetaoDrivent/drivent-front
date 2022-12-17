import { Warning } from '../../../components/Commons/Warning';
import usePayment from '../../../hooks/api/usePayment';

export default function Hotel() {
  const { payments } = usePayment();

  return (
    <>
      {!payments ? (
        <Warning>Você precisa ter confirmado pagamento antes de fazer a escolha da hospedagem</Warning>
      ) : (
        <></>
      )}
    </>
  );
}
