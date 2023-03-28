import useAsync from '../useAsync';

import * as usersApi from '../../services/api/usersApi';

export default function useValidateUser() {
  const {
    loading: validateUserLoading,
    error: validateUserError,
    act: validateUser,
  } = useAsync((body) => usersApi.validateUser(body), false);

  return {
    validateUserLoading,
    validateUserError,
    validateUser,
  };
}
