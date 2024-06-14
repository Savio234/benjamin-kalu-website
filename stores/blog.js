import { defineStore } from 'pinia';

export const useMyBlogStore = defineStore({
  id: 'myBlogStore',
  state: () => ({
    blogs: [],
  }),
  actions: {
    async getAllBlogs(page = 1, pageSize = 10) {
      const envVars = useRuntimeConfig().public;
      const baseHeader = {
        Authorization: 'Bearer ' + `${envVars.strapiAPI}`,
      };
      const storeBlogs = await $fetch(
        `${envVars.strapiURL}/Blogs?populate=*&sort[0]=id:asc&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
        {
          method: 'get',
          headers: baseHeader,
        },
      );
      console.log(storeBlogs);
      return storeBlogs;
    },
    async getBlog(id) {
      const envVars = useRuntimeConfig().public;
      const baseHeader = {
        Authorization: 'Bearer ' + `${envVars.strapiAPI}`,
      };
      const blog = await $fetch(`${envVars.strapiURL}/Blogs/${id}`, {
        method: 'get',
        headers: baseHeader,
      });
      return blog;
    },
  },
});
