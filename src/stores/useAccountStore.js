import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAccountStore = create(
  persist(
    (set) => ({
      token: null,
      SpecifyId:{},
      account: {},
      refreshTrigger: 0,
      refreshVote:0,
      VoteMale:0,
      VoteFemale:0,
      TimeValue:0,
      setTimeValue:(timeValue) => set({ TimeValue: timeValue+1 }),
      setVoteFemale: (voteFemale) => set({ VoteFemale: voteFemale }),
      setVoteMale: (voteMale) => set({ VoteMale: voteMale }), 
      triggerVote:() => set((state) => ({ refreshTrigger: state.refreshTrigger + 1 })),
      triggerRefresh: () => set((state) => ({ refreshTrigger: state.refreshTrigger + 1 })),
      setAccount: (account) => set({ account }),
      setSpecifyId: (id) => set({ SpecifyId: id }),
      setToken: (token) => set({ token }),
      logout: () => set({ account: {}, token: null }),
    }),
    {
      name: "account-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useAccountStore;