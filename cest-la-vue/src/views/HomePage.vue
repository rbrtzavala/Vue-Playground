<script setup>
import { useUserStore } from '@/stores/UserStore';

const userStore = useUserStore()
// import { userList }  from '../composables/useUserStore';
// import { computed } from 'vue';

// const shortUserList = computed(() => {
//   return userList.value.results.splice(0, 5);
// })
</script>

<template>
  <main>
    <h1>Welcome to <br />C'est La Vue</h1>
    <p>
      This is a place to manage various things: todos, users, posts, etc.
      Whatever your mind desires!
    </p>

    <!-- <ul>
      <li
        v-for="user in userStore.shortUserList"
        :key="`user-${user.name}`"
      >
        {{ user.name }}
      </li>
    </ul> -->
    
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

label {
  margin-bottom: 5px;
}

input[type="email"] {
  padding: 0.5rem;
  margin-bottom: 30px;
}

button {
  border: 1px solid green;
  padding: 10px;
  color: green;
  background-color: rgb(213, 255, 213);
  cursor: pointer;
}
</style>
