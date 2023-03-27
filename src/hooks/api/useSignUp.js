import useAsync from '../useAsync';

import * as usersApi from '../../services/api/usersApi';

export default function useSignUp() {
  const {
    loading: signUpLoading,
    error: signUpError,
    act: signUp,
  } = useAsync((formData) => usersApi.signUp(formData), false);

  return {
    signUpLoading,
    signUpError,
    signUp,
  };
}
