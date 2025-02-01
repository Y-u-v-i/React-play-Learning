const userStore = {};

export const registerUser  = (username, password) => {
  userStore[username] = password;
};

export const authenticateUser  = (username, password) => {
  return userStore[username] === password;
};