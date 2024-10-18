import urls from "./config.json";

const config = () => {
  if (window.location.hostname === "localhost") {
    return urls.DEV;
  } else {
    return urls.PROD;
  }
};

export const apiURL = config();
