<script>
import Pokedex from './components/PokedexComp.vue';
import BaseCounter from './components/BaseCounter.vue';
import BaseLayout from './components/BaseLayout.vue';

export default {
  components: {
    BaseCounter,
    BaseLayout,
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
        <BaseCounter />
        <BaseLayout>
          <template v-slot:one>
            <BaseCounter />
          </template>
        </BaseLayout>
        <Pokedex region="underWorld" />
    
        <template>
          Data Loading...
        </template>
      </div>
    </Suspense>
  </div>
</template>