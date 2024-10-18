export async function fetchAndReturn(url, parameters) {
  try {
    const response = await fetch(url, parameters);

    if (response.status === 200) {
      return [response.status, await response.json()];
    } else if (response.status === 204) {
      return [response.status, null];
    } else if (response.status === 400) {
      return [response.status, null];
    } else if (response.status === 500) {
      return [response.status, null];
    }
  } catch (error) {
    throw error;
  }
}
