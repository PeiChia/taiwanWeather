import axios from "axios";

// axios實例
var instance = axios.create({
  // 參考 swagger：https://opendata.cwb.gov.tw/dist/opendata-swagger.html
  baseURL: "https://opendata.cwb.gov.tw/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// request攔截器
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response攔截器
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// API method
export default function (method, url, data = null, config = null) {
  method = method.toLowerCase();
  if (method == "get") {
    return instance.get(url, { params: data, ...config });
  } else {
    console.error("Unknown method" + method);
    return false;
  }
}
