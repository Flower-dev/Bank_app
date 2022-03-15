export const login = (username, password) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(username, password);
      }, 500);
    });
  };
  