<script>
import { newCount } from '../composables/countStore'

export default {
  setup() {
    return {
      newCount,
    };
  },
}
</script>


<template>
  <div class="grid">
    <div class="one">
      <slot name="one" />
    </div>
    <div class="two">
      <slot name="two" />
    </div>
  </div>
</template>

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border: solid 2px magenta;
}

.one {
  border: solid 2px black;
}

.two {
  border: solid 2px cyan;
}
</style>