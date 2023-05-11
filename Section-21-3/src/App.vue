<template>
  <div>
    <p>{{ num }}</p>
    <button type="button" @click.prevent="increment">+</button>
    <button type="button" @click.prevent="decrement">-</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "App",
  setup() {
    let num = ref(0);

    function increment() {
      num.value++;
    }

    function decrement() {
      num.value--;
    }

    return {
      num,
      increment,
      decrement,
    };
  },
};
</script>
