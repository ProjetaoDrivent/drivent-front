import useAsync from '../useAsync';
import useToken from '../useToken';

import * as paymentApi from '../../services/paymentsApi';

export default function usePayment() {
  const token = useToken();

  const {
    data: payments,
    loading: paymentLoading,
    error: paymentError,
    act: getPaymentsInformations,
  } = useAsync(() => paymentApi.getPaymentsInformations(token));

  return {
    payments,
    paymentLoading,
    paymentError,
    getPaymentsInformations,
  };
}
