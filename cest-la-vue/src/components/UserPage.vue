<script>
import { reactive } from 'vue';

export default {
  async setup() {
    const state = reactive({
      userList: [],
    });

    async function fetchUserList() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then(res => res.json());

      return response;
    }

    state.userList = await fetchUserList();

    return {
      state, 
      fetchUserList
    }
  },
  // data: () => ({
  //   // userList: [],
  //   userTodos: []
  // }),
  methods: {
    // async fetchUserList() {
    //   this.state.userList = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    //   .then(res => res.json());
    // },
    async fetchUserTodos() {
      this.userTodos = fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json());
    }
  },
  // created() {
  //   this.fetchUserList();
  //   console.log('???', this.state.userList.results);
  // },
}
</script>

<template>
  <main>
    <h1>Users</h1>

    <ul>
      <li
        v-for="user in state.userList.results"
        :key="`user-${user.name}`"
        class="user-item"
      >
        {{  user.name  }}: {{  user.url  }}
      </li>
    </ul>

    <!-- <pre>{{  userList }}</pre> -->
  </main>
</template>

<style>
main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 320px;
  margin: 0 auto;
}

main h1 {
  margin-top: 10vh;
  margin-bottom: 20px;
}

.user-item {
  border: solid 2px red;
  padding: 10px 5px;
}
</style>