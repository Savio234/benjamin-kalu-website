import { defineStore } from 'pinia';

export const useMyBillsStore = defineStore({
  id: 'myBillsStore',
  state: () => ({
    bills: [],
  }),
  actions: {
    async getAllBills(page = 1, pageSize = 10) {
      const envVars = useRuntimeConfig().public;
      const baseHeader = {
        Authorization: 'Bearer ' + `${envVars.strapiAPI}`,
      };
      const storeBills = await $fetch(
        `${envVars.strapiURL}/bills?sort[0]=id:asc&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
        {
          method: 'get',
          headers: baseHeader,
        },
      );
      return storeBills;
    },
  },
});
