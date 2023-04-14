import useAsync from '../useAsync';
import useToken from '../useToken';

import * as postsApi from '../../services/api/postsApi';

export default function useCreatePost() {
  const token = useToken();

  const {
    loading: createPostLoading,
    error: createPostError,
    act: createPost,
  } = useAsync((formData) => postsApi.createPost(formData, token), false);

  return {
    createPostLoading,
    createPostError,
    createPost,
  };
}
