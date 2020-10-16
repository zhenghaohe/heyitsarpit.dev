export const setLocalStorage = <T>(key: string, data: T): void => {
  try {
    if (window !== undefined) {
      window.localStorage.setItem(key, JSON.stringify(data));
    }
  } catch (err) {
    console.log(err);
  }
};

export const getLocalStorage = <T>(key: string, initialValue: T): T => {
  try {
    if (window !== undefined) {
      const storedData = window.localStorage.getItem(key);
      if (storedData) {
        return JSON.parse(storedData);
      } else {
        setLocalStorage(key, initialValue);
        return initialValue;
      }
    } else {
      return initialValue;
    }
  } catch (err) {
    console.log(err);
    return initialValue;
  }
};
