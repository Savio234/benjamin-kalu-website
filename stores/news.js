import { defineStore } from 'pinia';

export const useNewsStore = defineStore({
  id: 'newsStore',
  state: () => ({
    news: [],
  }),
  actions: {
    async getAllNews(page = 1, pageSize = 10) {
      const envVars = useRuntimeConfig().public;
      const baseHeader = {
        Authorization: 'Bearer ' + `${envVars.strapiAPI}`,
      };

      const endpoint = `${envVars.strapiURL}/news?sort[0]=id:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize}&populate=*`;

      const storeNews = await $fetch(endpoint, {
        method: 'get',
        headers: baseHeader,
      });
      return storeNews;
    },

    async getNewsArticle(slug) {
      const envVars = useRuntimeConfig().public;
      const baseHeader = {
        Authorization: 'Bearer ' + `${envVars.strapiAPI}`,
      };

      const endpoint = `${envVars.strapiURL}/news?filters[slug][$eq]=${slug}&populate=*`;
      const article = await $fetch(endpoint, {
        method: 'get',
        headers: baseHeader,
      });
      return article;
    },
  },
});
