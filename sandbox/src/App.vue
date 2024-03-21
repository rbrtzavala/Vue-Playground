<script>
import Pokedex from './components/PokedexComp.vue';

export default {
  components: {
    Pokedex,
  }
}
</script>

<template>
  <div>
    <h1>
      New App
    </h1>
      
    <Suspense>
      <div>
        <Pokedex region="underWorld" />
    
        <template>
          Data Loading...
        </template>
      </div>
    </Suspense>
  </div>
</template>