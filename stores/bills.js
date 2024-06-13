import { defineStore } from 'pinia';

export const useMyBillsStore = defineStore({
  id: 'myBillsStore',
  state: () => ({
    bills: [],
  }),
  actions: {
    async getAllBills() {
      const envVars = useRuntimeConfig().public;
      const baseHeader = {
        Authorization: 'Bearer ' + `${envVars.strapiAPI}`,
      };
      const storeBills = await $fetch(`${envVars.strapiURL}/bills`, {
        method: 'get',
        headers: baseHeader,
      });
      console.log(storeBills);
      console.log(storeBills.data);
    },
  },
});
