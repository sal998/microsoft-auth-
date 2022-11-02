import { graphConfig } from "./authConfig";

/**
 * Attaches a given access token to a MS Graph API call. Returns information about the user
 * @param accessToken
 */
export async function callMsGraph(accessToken) {
  // const headers = new Headers();
  // const bearer = `Bearer ${accessToken}`;
  console.log(accessToken, "access token");

  // headers.append("Authorization", bearer);

  const url = "";
  const apiOptions = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return fetch(url, apiOptions)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
