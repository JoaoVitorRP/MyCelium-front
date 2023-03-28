import api from './api';

export async function validateUser(body) {
  const response = await api.post('/users/sign-up/validate', body);

  return response.data;
}

export async function signUp(formData) {
  const response = await api.post('/users/sign-up', formData, {
    headers: {
      'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
    },
  });

  return response.data;
}

export async function signIn(body) {
  const response = await api.post('/users/sign-in', body);

  return response.data;
}
