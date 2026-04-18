import { defineStore } from 'pinia';

export const useMyBillsStore = defineStore({
  id: 'myBillsStore',
  state: () => ({
    bills: [],
    motions: [],
  }),
  actions: {
    async getAllBills(page = 1, pageSize = 10, searchType = '', searchTerm = '', category = '') {
      const envVars = useRuntimeConfig().public;
      const baseHeader = {
        Authorization: 'Bearer ' + `${envVars.strapiAPI}`,
      };
      let endpoint = `${envVars.strapiURL}/bills?sort[0]=id:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize}&populate[get_bill_details][populate]=*`;
      if (searchTerm) {
        if (searchType) {
          endpoint += `&filters[${searchType}][$containsi]=${searchTerm}`;
        } else {
          endpoint += `&filters[$or][0][title][$containsi]=${searchTerm}&filters[$or][1][hb_number][$containsi]=${searchTerm}&filters[$or][2][status][$containsi]=${searchTerm}&filters[$or][3][status_desc][$containsi]=${searchTerm}`;
        }
      }

      if (category && category !== 'All') {
        endpoint += `&filters[bill_type][$containsi]=${category}`;
      }

      const storeBills = await $fetch(endpoint,
        {
          method: 'get',
          headers: baseHeader,
        },
      );
      console.log('data: ', storeBills.data);
      console.log('storeBills: ', storeBills);
      console.log('pagination : ', storeBills.meta.pagination);
      return storeBills;
    },
    async getBill(id) {
      const envVars = useRuntimeConfig().public;
      const baseHeader = {
        Authorization: 'Bearer ' + `${envVars.strapiAPI}`,
      };
      const endpoint = `${envVars.strapiURL}/bills/${id}?populate[get_bill_details][populate]=*`
      const bill = await $fetch(endpoint, {
        method: 'get',
        headers: baseHeader,
      });
      return bill;
    },

    async getMotions(page = 1, pageSize = 8, searchType = '', searchTerm = '', category = '') {
      const envVars = useRuntimeConfig().public;
      const baseHeader = {
        Authorization: 'Bearer ' + `${envVars.strapiAPI}`,
      };

      let endpoint = `${envVars.strapiURL}/motions?sort[0]=id:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;

      if (searchTerm) {
        if (searchType) {
          endpoint += `&filters[${searchType}][$containsi]=${searchTerm}`;
        } else {
          endpoint += `&filters[title][$containsi]=${searchTerm}`;
        }
      }

      if (category && category !== 'All') {
        endpoint += `&filters[bill_type][$containsi]=${category}`;
      }

      const motions = await $fetch(endpoint, {
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
