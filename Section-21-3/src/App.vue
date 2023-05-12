<template>
  <div>
    <p>{{ num }}</p>
    <p>{{ double }}</p>
    <button type="button" @click.prevent="increment">+</button>
    <button type="button" @click.prevent="decrement">-</button>

    <p>{{ name }}</p>

    <p>
      <input type="text" v-model="phrase" />
    </p>
    <p>{{ reversedPhrase }}</p>

    <app-alert :user="user" />

    <button type="button" ref="btn">Button</button>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted } from "vue";
import AppAlert from "./components/Alert.vue";
import { useNumber } from "@/hooks/number";
import { usePhrase } from "@/hooks/phrase";

const btn = ref(null);

onBeforeMount(() => {
  console.log("Before Mount");
});
onMounted(() => {
  console.log("Mounted");

  btn.value.addEventListener("click", () => {
    console.log("Clicked");
  });
});

const user = reactive({
  name: "Joshua",
  age: 29,
});

setTimeout(() => {
  user.name = "Josh";
}, 3000);

const { num, increment, double, decrement } = useNumber();
const { phrase, reversedPhrase, num: phraseNum } = usePhrase();

const { name } = toRefs(user);
</script>
