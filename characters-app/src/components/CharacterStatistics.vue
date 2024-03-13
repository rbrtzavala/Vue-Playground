<script>
export default {
  props: {
    characters: {
      type: Array,
      required: true
    }
  },
  computed: {
    elementStatistics() {
      const elements = ['Air', 'Earth', 'Fire', 'Water'];
      const statistics = {
        Air: 0,
        Earth: 0,
        Fire: 0,
        Water: 0
      }

      this.characters.forEach(character => {
        elements.forEach(element => {
          if (character.element.indexOf(element) > -1) {
            statistics[element] += 1
          }
        })
      })
      
      // return this.characterList.filter(character => character.element.indexOf('Earth') > -1).length
      return statistics
    }
  },
}
</script>

<template>
  <h2>
    Statistics
  </h2>

  <ul>
    <li v-for="(stat, type) in elementStatistics" :key="`${stat}-${type}`">
      {{ type }}: {{ stat }}
    </li>
  </ul>
</template>