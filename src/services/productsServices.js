import { apiURL } from "../configuration/apiconfig";
import { fetchAndReturn } from "../utils/utility";

const getProductsRequest = () => {
  const url = `${apiURL}/products`;
  const parameters = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetchAndReturn(url, parameters);
};

export { getProductsRequest };
