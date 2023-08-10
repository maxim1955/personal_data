import {computed} from 'vue'
import {defineStore} from 'pinia'

export const child = defineStore('child', {
    state: () => ({
        childArray: JSON.parse(localStorage.getItem('child'))
    }),
    getters: {
        SET_CHILD(state) {
            return computed(() => state.childArray)
        }
    },
    actions: {
        GET_CHILD(info) {
            localStorage.setItem('child', JSON.stringify(info))
        },
    }
})
