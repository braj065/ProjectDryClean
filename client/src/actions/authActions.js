import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import { setAuthToken } from "../utils";
import jwt_decode from "jwt-decode";

//Signup user
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("api/users/register", userData)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Login get user token
export const loginUser = userData => dsipatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      //save to local storage
      const { token } = res.data;
      //set token to storage
      localStorage.setItem("jwtToken", token);
      //set token to authheader
      setAuthToken(token);
      //Decode token to get user data
      const decoded = jwt_decode(token);
      //set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};