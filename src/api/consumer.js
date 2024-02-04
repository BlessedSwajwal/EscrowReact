import axios from "axios";

export async function Login(email, password) {
  console.log(email, password);
  var loginData = { email, password };
  var apiUrl = import.meta.env.VITE_API_URL;
  var res;
  try {
    res = await axios.post(`${apiUrl}/Consumer/login`, loginData);
    console.log(res);
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      console.log(error.response.data.detail);
      console.log(error.response.status);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
  }
}
