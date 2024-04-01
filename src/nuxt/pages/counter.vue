<template>
  <h3 class="text-h3 mb-4">Counter</h3>
  <p>Current count: {{ counter }}</p><br>
  <v-btn color="primary" @click="incrementCounter">Click me</v-btn>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const counter = ref(0);

    const incrementCounter = () => {
      counter.value++;
    };

    return {
      counter,
      incrementCounter
    };
  }
}
</script>