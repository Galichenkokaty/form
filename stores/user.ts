import { defineStore } from 'pinia'

    export const useUserStore = defineStore('basket', () => {
        const user = ref({})


    return { user}
})