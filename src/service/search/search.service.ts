import { HttpClient } from '../base';
import { API_URL } from '../../config/env';

export const SearchService = {
  getItemsBySearch: async (value: string) => {
    return await HttpClient.get(`${API_URL}sites/MLB/search?q=${value}`);
  },
};
