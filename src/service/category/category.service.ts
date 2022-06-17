import { HttpClient } from '../base';
import { API_URL } from '../../config/env';

export const CategoryService = {
  getCategories: async () => {
    return await HttpClient.get(`${API_URL}sites/MLB/categories`).then(
      (res) => {
        return {
          categories: res,
        };
      }
    );
  },
  getItemsByCategoryId: async (id: string) => {
    return await HttpClient.get(
      `${API_URL}sites/MLB/search?category=${id}`
    ).then((res) => {
      return {
        items: res,
      };
    });
  },
};
