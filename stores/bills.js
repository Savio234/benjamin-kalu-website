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
      // const endpoint = `${envVars.strapiURL}/bills?sort[0]=id:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
      const endpoint = `${envVars.strapiURL}/bills?sort[0]=id:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize}&populate[get_bill_details][populate]=*`
      const storeBills = await $fetch(endpoint,
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
      // const endpoint = `${envVars.strapiURL}/bills/${id}`
      const endpoint = `${envVars.strapiURL}/bills/${id}?populate[get_bill_details][populate]=*`
      const bill = await $fetch(endpoint, {
        method: 'get',
        headers: baseHeader,
      });
      console.log('bill: ', bill);
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
