import axios, { AxiosResponse } from "axios";

const isDev: string = process.env.NODE_ENV;
var baseURL = isDev ? "http://127.0.0.1:8000/" : ""; //'https://api.nonodi.com' : '';

var instance = axios.create({
  baseURL: baseURL,
  timeout: 10000
});

instance.interceptors.request.use(config => {
  config.data = Object.assign({}, config.data, {
    accessToken: `${window.localStorage.getItem("accessToken")}`
  });
  return config;
});

instance.interceptors.response.use(resp => {
  return resp.data;
});

export const login = (
  username: string,
  password: string,
  type: string = "web"
) => {
  return instance.post(`/login`);
};

export const reg = (
  username: string,
  password: string
): Promise<AxiosResponse<any>> => {
  return instance.post(
    `/register`,
    {
      username: username,
      password: password
    },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }
  )
}

export const simpleHttp = (): Promise<AxiosResponse<any>> => {
  return instance.post(
    `/simple`,
    {},
    { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
  );
};
