import { defineStore } from 'pinia';

export const useMyBillsStore = defineStore({
  id: 'myBillsStore',
  state: () => ({
    bills: [],
    motions: [],
  }),
  actions: {
    async getAllBills(page = 1, pageSize = 10) {
      const envVars = useRuntimeConfig().public;
      const baseHeader = {
        Authorization: 'Bearer ' + `${envVars.strapiAPI}`,
      };
      const storeBills = await $fetch(
        `${envVars.strapiURL}/bills?sort[0]=id:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
        {
          method: 'get',
          headers: baseHeader,
        },
      );
      return storeBills;
    },
    async getBill(id) {
      const envVars = useRuntimeConfig().public;
      const baseHeader = {
        Authorization: 'Bearer ' + `${envVars.strapiAPI}`,
      };
      const bill = await $fetch(`${envVars.strapiURL}/bills/${id}`, {
        method: 'get',
        headers: baseHeader,
      });
      return bill;
    },

    async getMotions() {
      const envVars = useRuntimeConfig().public;
      const baseHeader = {
        Authorization: 'Bearer ' + `${envVars.strapiAPI}`,
      };
      const motions = await $fetch(`${envVars.strapiURL}/motions?sort[0]=id:desc`, {
        method: 'get',
        headers: baseHeader,
      });
      return motions;
    },

    async getMotion(id) {
      const envVars = useRuntimeConfig().public;
      const baseHeader = {
        Authorization: 'Bearer ' + `${envVars.strapiAPI}`,
      };

      const motion = await $fetch(`${envVars.strapiURL}/motions/${id}`, {
        method: 'get',
        headers: baseHeader,
      });
      return motion;
    },
  },
});
