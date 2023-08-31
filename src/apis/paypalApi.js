const baseUrl = "https://api-m.sandbox.paypal.com";
const base64 = require("base-64");

const clientId =
  "AXZBx00WWg9gm6co8TfNXsHYkMtuFtv9QyuDZIqlEEXFlWnZhmPSpWX86PClOt0OPll0vhkeb848PCFb";
const clientPassword =
  "EFkLfVW8SDnGggK64byk0zivXNe5aNHrvQZ6IzEHwRaL7lQEQ-m6sAMfgXf9BsceQ4SaoZ0Xi3XqiQye";

const generateToken = () => {
  const headers = new Headers();
  headers.append("Content-Type", "application/x-www-form-urlencoded");
  headers.append(
    "Authorization",
    "Basic " + base64.encode(`${clientId}:${clientPassword}`)
  );

  const requestOptions = {
    method: "POST",
    headers: headers,
    body: "grant_type=client_credentials",
  };

  return new Promise((resolve, reject) => {
    fetch(baseUrl + "/v1/oauth2/token", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log("RESULTTT===>>>>", result);
        resolve(JSON.parse(result));
      })
      .catch((error) => {
        console.log("ERROR", error);
        reject(error);
      });
  });
};

export default {
  generateToken,
};
