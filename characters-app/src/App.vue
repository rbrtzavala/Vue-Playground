<script>
import CharacterCard from './components/CharacterCard.vue';
import CharacterStatistics from './components/CharacterStatistics.vue';

export default {
  components: {
    CharacterCard,
    CharacterStatistics
  },
  data: () => ({
    characterList: [
      {
        name: 'Mr. Brown',
        element: ['Air', 'Earth', 'Water', 'Fire']
      },
      {
        name: 'Mr. White',
        element: ['Fire']
      },
      {
        name: 'Mr. Blonde',
        element: ['Air','Fire']
      },
      {
        name: 'Mr. Orange',
        element: ['Water']
      },
      {
        name: 'Mr. Pink',
        element: ['Earth', 'Air']
      },
      {
        name: 'Nice Guy Eddie',
        element: ['Fire']
      },
    ],
    favoriteList: [],
    newCharacter: {
      name: '',
      element: []
    }
  }),
  methods: {
    addNewCharacter() {
      this.characterList.push(this.newCharacter)
      this.newCharacter = { name: '' }
    },
    addFavoriteCharacter(payload) {
      this.favoriteList.push(payload);
    },
  }
}
</script>

<template>

  <CharacterStatistics
    :characters="characterList"
  />

      <h2>
        Characters
      </h2>

      <p v-if="characterList.length === 0">
        There are no characters
      </p>

      <ul v-else-if="characterList.length % 2 === 0">
        <li v-for="(character, index) in characterList" :key="`even-char-${index}`">
          <!-- Placeholder CharCard -->
          <CharacterCard
            :character="character"
            @favorite="addFavoriteCharacter"
          />
        </li>
      </ul>
      <p v-else>There are odd characters!</p>

      <h2>
        Favorite Characters
      </h2>

      <ul v-if="favoriteList.length > 0">
        <li v-for="(character, i) in favoriteList" :key="`odd-char-${i}`">
          {{ character }}
        </li>
      </ul>
      <p v-else>
        No favorite characters yet!
      </p>

      <h2>
        New Characters
      </h2>
      <pre>
        {{ newCharacter }}
      </pre>
      <label for="character-name">
        Character Name
      </label>
      <input
        type="text"
        v-model="newCharacter.name"
        @keyup.enter="addNewCharacter"
      >

      <p>
        <span v-for="(character, index) in characterList" :key="`comma-list-${index}`">
          {{ character.name }}{{ index === characterList.length - 1 ? '' : ', ' }}
        </span>
      </p>
</template>