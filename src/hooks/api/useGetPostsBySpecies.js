import useAsync from '../useAsync';
import useToken from '../useToken';

import * as postsApi from '../../services/api/postsApi';

export default function useGetPostsBySpecies() {
  const token = useToken();

  const {
    loading: getPostsBySpeciesLoading,
    error: getPostsBySpeciesError,
    act: getPostsBySpecies,
  } = useAsync((species) => postsApi.getPostsBySpecies(species, token), false);

  return {
    getPostsBySpeciesLoading,
    getPostsBySpeciesError,
    getPostsBySpecies,
  };
}
