<script setup>
import { defineEmits, defineProps, reactive } from 'vue';

defineProps({
  title: {
    type: String,
    default: 'User List'
  }
});

defineEmits('update-user-list');

const state = reactive({
  userList: [],
});

async function fetchUserList() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
  .then(res => res.json());

  return response;
}

state.userList = await fetchUserList();
</script>

<template>
  <main>
    <h1>{{ title }}</h1>

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