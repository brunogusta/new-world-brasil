export const TOKEN_KEY = window.localStorage.getItem('TOKEN_KEY');

export const getToken = async () => {
  const token = await window.localStorage.getItem('TOKEN_KEY');

  console.log(token);
  return token;
};
