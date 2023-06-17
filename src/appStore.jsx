import create from 'zustand'
import {persist} from 'zustand/middleware'

let appStore = (set) => ({
    deopen : true,
    updateOpen: (deopen) => set((tstate) => ({deopen:deopen})),
});

appStore = persist (appStore, {name: "my_app_store"});
export const useAppStore = create(appStore);