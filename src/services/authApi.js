import api from './api';

export async function signIn(email, password) {
  const response = await api.post('/auth/sign-in', { email, password });
  return response.data;
}

export function assignGithub() {
  window.location.assign(`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}`);
}

export async function getGithubAccessToken(codeParam) {
  const response = await api.get(`auth/oauth/github/accessToken?code=${codeParam}`);
  return response.data;
}

export async function getGithubUserData(accessToken) {
  const response = await api.get('auth/oauth/github/UserData', {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
  return response.data;
}
