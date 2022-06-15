import axios from "axios";
import { useNavigate } from "react-router-dom";

function useUserActions() {
  const navigate = useNavigate();
  const baseURL = "http://localhost:8000/api";

  return {
    login,
    register,
    logout,
  };

  // Login the user
  function login(data) {
    return axios.post(`${baseURL}/auth/login/`, data).then((res) => {
      // Registering the account and tokens in the store
      localStorage.setItem(
        "auth",
        JSON.stringify({
          access: res.data.access,
          refresh: res.data.refresh,
          user: res.data.user,
        })
      );
      navigate("/");
    });
  }

  // Register the user
  function register(data) {
    return axios.post(`${baseURL}/auth/register/`, data).then((res) => {
      // Registering the account and tokens in the store
      localStorage.setItem(
        "auth",
        JSON.stringify({
          access: res.data.access,
          refresh: res.data.refresh,
          user: res.data.user,
        })
      );
      navigate("/");
    });
  }

  // Logout the user
  function logout() {
    localStorage.removeItem("auth");
    navigate("/login");
  }
}

// Get the user
function getUser() {
  const auth = JSON.parse(localStorage.getItem("auth"));
  return auth.user;
}

// Get the access token
function getAccessToken() {
  const auth = JSON.parse(localStorage.getItem("auth"));
  return auth.access;
}

// Get the refresh token
function getRefreshToken() {
  const auth = JSON.parse(localStorage.getItem("auth"));
  return auth.refresh;
}

export { useUserActions, getUser, getAccessToken, getRefreshToken };
