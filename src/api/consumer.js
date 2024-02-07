import axios from "axios";
import { jwtDecode } from "jwt-decode";

//calls the login API endpoint with the email and password.
export async function Login(email, password) {
  console.log(email, password);
  var loginData = { email, password };
  var apiUrl = import.meta.env.VITE_API_URL;
  var res;
  try {
    //Try to login and if successful, set the auth-token in the local storage
    //and raise a storage event for the custom hooks to reposnd to.

    res = await axios.post(`${apiUrl}/Consumer/login`, loginData);
    localStorage.setItem("auth-token", res.data.token);
    window.dispatchEvent(new Event("storage"));
    //console.log(res);
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

export async function SignUp(userDetails) {
  console.log(userDetails);
  var apiUrl = import.meta.env.VITE_API_URL;
  var res;
  try {
    //Try to login and if successful, set the auth-token in the local storage
    //and raise a storage event for the custom hooks to reposnd to.
    res = await axios.post(`${apiUrl}/Consumer/register`, userDetails);
    localStorage.setItem("auth-token", res.data.token);
    window.dispatchEvent(new Event("storage"));
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

export function getUserId() {
  let token = localStorage.getItem("auth-token");
  let decoded = jwtDecode(token);
  let userId =
    decoded[
      "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
    ];
  return userId;
}

export async function getUserDetails() {
  var apiUrl = import.meta.env.VITE_API_URL;
  var res;

  try {
    const headers = {
      Authorization: `Bearer ${window.localStorage.getItem("auth-token")}`,
    };
    res = await axios.get(`${apiUrl}/Consumer/details`, { headers });
    return res.data;
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
