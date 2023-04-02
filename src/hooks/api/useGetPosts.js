import useAsync from '../useAsync';
import useToken from '../useToken';

import * as postsApi from '../../services/api/postsApi';

export default function useGetPosts() {
  const token = useToken();

  const {
    loading: getPostsLoading,
    error: getPostsError,
    act: getPosts,
  } = useAsync(() => postsApi.getPosts(token), false);

  return {
    getPostsLoading,
    getPostsError,
    getPosts,
  };
}
