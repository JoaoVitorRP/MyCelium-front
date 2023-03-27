import api from './api';

export async function signUp(formData) {
  const response = await api.post('/users/sign-up', formData, {
    headers: {
      'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
    },
  });

  return response.data;
}
