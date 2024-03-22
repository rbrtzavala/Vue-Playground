<script setup>
import { defineProps } from 'vue';
import { userList }  from '../composables/useUserStore';

defineProps({
  title: {
    type: String,
    default: 'User List'
  }
});

defineEmits('update-user-list');

async function fetchUserList() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
  .then(res => res.json());

  return response;
}

userList.value = await fetchUserList();
</script>

<template>
  <main>
    <h1>{{ title }}</h1>

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