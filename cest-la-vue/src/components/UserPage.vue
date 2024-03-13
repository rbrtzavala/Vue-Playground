<script>
const myHeaders = new Headers();
myHeaders.append("Content-Type", "Application/JSON");

export default {
  data: () => ({
    userList: [],
    userTodos: []
  }),
  methods: {
    async fetchUserList() {
      this.userList = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then(res => res.json());
    },
    async fetchUserTodos() {
      this.userTodos = fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json());
    }
  },
  created() {
    this.fetchUserList();
  },
}
</script>

<template>
  <main>
    <h1>Users</h1>

    <ul>
      <li
        v-for="user in userList.results"
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