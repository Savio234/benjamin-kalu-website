import { defineStore } from 'pinia';

export const usePublicationsStore = defineStore({
  id: 'publicationsStore',
  state: () => ({
    publications: [],
  }),
  actions: {
    async getAllPublications(page = 1, pageSize = 10) {
      const envVars = useRuntimeConfig().public;
      const baseHeader = {
        Authorization: 'Bearer ' + `${envVars.strapiAPI}`,
      };

      const endpoint = `${envVars.strapiURL}/publications?sort[0]=id:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize}&populate=*`;

      const storePublications = await $fetch(endpoint, {
        method: 'get',
        headers: baseHeader,
      });
      return storePublications;
    },
  },
});
