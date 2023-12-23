import axios from 'axios';

// const instance = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
// });

const api = (token?: string) => {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,

    ...(token
      ? {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      : {}),
  });
};

export default api;
