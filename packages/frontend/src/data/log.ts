import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL;

let token = '';
export function setToken(t: string) {
  token = t;
}

export function logEnter(from: string, to: string) {
  axios.post(baseURL + '/log/enter', {
    from,
    to,
  }, {
    headers: {
      Authorization: token,
    },
  });
}

export function logLeave(from: string, to: string) {
  fetch(baseURL + '/log/leave', {
    method: 'POST',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to,
    }),
    keepalive: true,
  });
}

export function logClick(from: string, to: string) {
  axios.post(baseURL + '/log/click', {
    from,
    to,
  }, {
    headers: {
      Authorization: token,
    },
  });
}
