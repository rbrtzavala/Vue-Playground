<script>
  // https://pokeapi.co/api/v2/pokemon?limit=151
  export default {
    data: () => ({
      pokedex: [1, 2, 3],
    }),
    methods: {
      async fetchPokemon() {
        this.pokedex = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(res => res.json())
      },
    },
    beforeCreate() {
      console.log('Before create');
      console.log(this.pokedex);
    },
    created() {
      console.log('Created');
      console.log(this.pokedex);
      this.fetchPokemon();
    },
  };
</script>

<template>
  <h1>
    New App
  </h1>
  <button @click="fetchPokemon">Fetch</button>
  <pre>{{ pokedex }}</pre>

</template>