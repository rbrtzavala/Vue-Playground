<script setup>
import { defineProps } from 'vue';
import { useUserStore } from '@/stores/UserStore'
// import { userList }  from '../composables/useUserStore';

defineProps({
  title: {
    type: String,
    default: 'User List'
  }
});

defineEmits('update-user-list');

const userStore = useUserStore()

userStore.fetchUsers();
// userList.value = await fetchUserList();
</script>

<template>
  <main>
    <h1>{{ title }}</h1>

    <ul>
      <li
      v-for="user in userStore.userList.results"
      :key="`user-${user.name}`"
      class="user-item"
      >
        <router-link :to="`/user/${user.name}`">
          {{  user.name  }}: {{  user.url  }}
        </router-link>
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