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

export function usePostPayment() {
  const token = useToken();

  const {
    loading: paymentLoading,
    error: paymentError,
    act: postPayment
  } = useAsync((data) => paymentApi.postPayment(data, token), false);

  return {
    paymentLoading,
    paymentError,
    postPayment
  };
}
