export const LOGIN = "/auth/login";
export const SIGNUP = "/auth/register";
export const apiRoot = process.env.REACT_APP_NEWS_API_URL;
export const accessKey = process.env.REACT_APP_API_ACCESS_KEY;

export const TOPSTORIESCONFIG = {
  method: "GET",
  url: `${apiRoot}/topstories/v2/home.json`,
  params: {
    "api-key": `${accessKey}`,
  },
};

export const WORLDSTORIESCONFIG = {
  method: "GET",
  url: `${apiRoot}/topstories/v2/world.json`,
  params: {
    "api-key": `${accessKey}`,
  },
};

export const SCIENCESTORIESCONFIG = {
  method: "GET",
  url: `${apiRoot}/topstories/v2/science.json`,
  params: {
    "api-key": `${accessKey}`,
  },
};
