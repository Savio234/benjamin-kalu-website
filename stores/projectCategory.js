import { defineStore } from 'pinia';

export const useProjectCategoryStore = defineStore({
  id: 'projectCategoryStore',
  state: () => ({
    projectCategories: [],
  }),
  actions: {
    async getAllProjectCategories(page = 1, pageSize = 10) {
      const envVars = useRuntimeConfig().public;
      const baseHeader = {
        Authorization: 'Bearer ' + `${envVars.strapiAPI}`,
      };

      const endpoint = `${envVars.strapiURL}/project-categories?sort[0]=id:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize}&populate=*`;

      const storeCategories = await $fetch(endpoint, {
        method: 'get',
        headers: baseHeader,
      });
      return storeCategories;
    },
  },
});
