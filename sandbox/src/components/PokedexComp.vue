<script>
import { computed, ref, reactive } from 'vue';

  export default {
    async setup() {
      const regionName = ref("Kanto");
      const state = reactive ({
        elementType: 'Lightening'
      })

      const regionNameAllCaps = computed(() => {
        return regionName.value.toUpperCase();
      });
      
      const elemenTypeAllCaps = computed(() => {
        return state.elementType.toUpperCase();
      });

      const pokedex = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(res => res.json());

      return {
        elemenTypeAllCaps,
        pokedex,
        regionName,
        regionNameAllCaps
      };
    },
    computed: {
      regionNameLowerCase() {
        return this.regionName.toLowerCase();
      },
    },
    methods: {
      changeRegionName() {
        this.regionName = 'Hoenn'
      }
    },
    created() {
      // console.log('Created');
      // console.log(this.pokedex);
    },
  };
</script>

<template>
  <div>
    <h2>{{  regionName }}</h2>
    <h3>{{  regionNameAllCaps }}</h3>
    <h3>{{  regionNameLowerCase }}</h3>
    <h3>{{  elemenTypeAllCaps }}</h3>
    <button @click="changeRegionName">
      Change Region Name
    </button>
    
    <pre>{{ pokedex }}</pre>
  </div>
</template>