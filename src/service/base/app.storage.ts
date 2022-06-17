export const AppStorage = {
  setValueStorage: (key: string, value: any) => {
    localStorage.setItem(key, value);
  },
  removeValueStorage: (key: string) => {
    localStorage.removeItem(key);
  },
  getValueStorage: (key: string) => {
    return localStorage.getItem(key);
  },
};
