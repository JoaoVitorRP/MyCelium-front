import api from './api';

export async function getPosts(token) {
  const response = await api.get('/posts/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getPostsBySpecies(species, token) {
  const response = await api.get(`/posts/trendings/${species}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getTrendings(limit, token) {
  const response = await api.get(`/posts/trendings?limit=${limit}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function createPost(formData, token) {
  const response = await api.post('/posts/', formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
