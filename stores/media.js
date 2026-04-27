import { defineStore } from 'pinia';

export const useMediaStore = defineStore({
    id: 'mediaStore',
    state: () => ({
        media: [],
    }),
    actions: {
        async getAllMedia(page = 1, pageSize = 10) {
            const envVars = useRuntimeConfig().public;
            const baseHeader = {
                Authorization: 'Bearer ' + `${envVars.strapiAPI}`,
            };
            const endpoint = `${envVars.strapiURL}/media?sort[0]=id:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize}&populate=*`;
            const storeMedia = await $fetch(endpoint, {
                method: 'get',
                headers: baseHeader,
            });
            return storeMedia;
        },
    },
});
