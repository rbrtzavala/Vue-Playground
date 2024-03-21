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

      const changeRegionName = () => {
        regionName.value = 'Hoenen!'
      }

      const pokedex = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(res => res.json());

      return {
        changeRegionName,
        elemenTypeAllCaps,
        pokedex,
        regionName,
        regionNameAllCaps
      };
    }
  };
</script>

<template>
  <div>
    <h2>{{  regionName }}</h2>
    <h3>{{  regionNameAllCaps }}</h3>
    <h3>{{  elemenTypeAllCaps }}</h3>
    <button @click="changeRegionName">
      Change Region Name
    </button>
    
    <pre>{{ pokedex }}</pre>
  </div>
</template>