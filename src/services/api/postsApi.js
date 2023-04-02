import api from './api';

export async function getPosts(token) {
  const response = await api.get('/posts/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
