import axios from "axios";

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
