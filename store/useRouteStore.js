// stores/useRouteStore.js
import { create } from 'zustand';

const useRouteStore = create((set) => ({
    prevRoute: null,
    currentRoute: null,

    setRoute: (route) =>
        set((state) => ({
            prevRoute: state.currentRoute,
            currentRoute: route,
        })),
}))

export default useRouteStore;