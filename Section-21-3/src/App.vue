<template>
  <div>
    <p>{{ num }}</p>
    <button type="button" @click.prevent="increment">+</button>
    <button type="button" @click.prevent="decrement">-</button>

    <p>{{ name }}</p>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";

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

    const user = reactive({
      name: "Joshua",
      age: 29,
    });

    setTimeout(() => {
      user.name = "Josh";
    }, 3000);

    return {
      num,
      increment,
      decrement,
      ...toRefs(user),
    };
  },
};
</script>
