import { defineStore } from 'pinia'

export const useUserStore = defineStore('UserStore', {
  // Data
  state: () => ({
    userList: []
  }),
  // Computed
  getters: {
    shortUserList: (state) => {
      return state.userList.results.splice(0, 5)
    }
  },
  // Methods
  actions: {
    async fetchUsers() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then(res => res.json());
    
      this.userList = response;
    },
  },
})