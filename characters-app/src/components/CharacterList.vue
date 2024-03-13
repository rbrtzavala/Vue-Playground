<script>
export default {

}
</script>

<template>
  <h2>
    Characters
  </h2>

  <p v-if="characterList.length === 0">
    There are no characters
  </p>

  <ul v-else-if="characterList.length & 2 === 0">
    <li v-for="(character, index) in characterList" :key="`even-char-${index}`">
      <p>
        {{ character.name }}
      </p>
      <button @click="favoriteCharacter(character)">⭐️ Favorite</button>
    </li>
  </ul>

  <p v-else>
    There are odd characters!
  </p>
</template>