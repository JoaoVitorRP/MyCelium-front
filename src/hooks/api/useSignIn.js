import useAsync from '../useAsync';

import * as usersApi from '../../services/api/usersApi';

export default function useSignIn() {
  const {
    loading: signInLoading,
    error: signInError,
    act: signIn,
  } = useAsync((body) => usersApi.signIn(body), false);

  return {
    signInLoading,
    signInError,
    signIn,
  };
}
