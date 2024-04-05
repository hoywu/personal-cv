import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const getAuth = () => {
  return localStorage.getItem("adminAuth");
}

// 维护
export const reloadConfig = async () => {
  const response = await axios.get(baseURL + "/admin/reload", {
    headers: {
      Authorization: getAuth(),
    }
  });
  return response.data;
}

export const reloadCV = async () => {
  const response = await axios.get(baseURL + "/admin/reloadcv", {
    headers: {
      Authorization: getAuth(),
    }
  });
  return response.data;
}

// Log
export const getLogList = async () => {
  const response = await axios.get(baseURL + "/admin/log/list", {
    headers: {
      Authorization: getAuth(),
    }
  });
  return response.data;
}

export const deleteLog = async (id: number) => {
  const response = await axios.post(baseURL + "/admin/log/delete", { id }, {
    headers: {
      Authorization: getAuth(),
    }
  });
  return response.data;
}

// Token
export const getTokenList = async () => {
  const response = await axios.get(baseURL + "/admin/token/list", {
    headers: {
      Authorization: getAuth(),
    }
  });
  return response.data;
}

export const newToken = async (body: object) => {
  const response = await axios.post(baseURL + "/admin/token/new", body, {
    headers: {
      Authorization: getAuth(),
    }
  });
  return response.data;
}

export const updateToken = async (body: object) => {
  const response = await axios.post(baseURL + "/admin/token/update", body, {
    headers: {
      Authorization: getAuth(),
    }
  });
  return response.data;
}

export const deleteToken = async (id: number) => {
  const response = await axios.post(baseURL + "/admin/token/delete", { id }, {
    headers: {
      Authorization: getAuth(),
    }
  });
  return response.data;
}
