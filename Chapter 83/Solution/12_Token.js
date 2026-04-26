// 12. The Token Manager:
//     You are developing a user authentication system, and you need to manage user authentication tokens. Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time.

function setAuthToken(token, expiryMs = 3600000) {
  const expiration = Date.now() + expiryMs;
  localStorage.setItem("token", token);
  localStorage.setItem("token-expiration", expiration);
}
