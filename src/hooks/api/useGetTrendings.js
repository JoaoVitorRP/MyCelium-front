import useAsync from '../useAsync';
import useToken from '../useToken';

import * as postsApi from '../../services/api/postsApi';

export default function useGetTrendings() {
  const token = useToken();

  const {
    loading: getTrendingsLoading,
    error: getTrendingsError,
    act: getTrendings,
  } = useAsync((limit) => postsApi.getTrendings(limit, token), false);

  return {
    getTrendingsLoading,
    getTrendingsError,
    getTrendings,
  };
}
