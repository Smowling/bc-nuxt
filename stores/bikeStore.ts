// bikeshopStore.js
import { defineStore } from 'pinia';

export const useBikeshopStore = defineStore('bikeshop', {
    state: () => ({
        selectedBikeshop: null,
    }),
    actions: {
        selectBikeshop(bikeshop: any) {
            this.selectedBikeshop = bikeshop;
        },
    },
});