import { create } from 'zustand'

type AuthStore = {
    isLoggedIn: boolean
    login: () => void
    logout: () => void
}

export const useAuthStore = create<AuthStore>((set) => ({
    isLoggedIn: false,
    login: () => set({ isLoggedIn: true }),
    logout: () => {
        // Clear any auth tokens or session data here
        sessionStorage.removeItem('dummyAuth')
        set({ isLoggedIn: false })
    }
}))