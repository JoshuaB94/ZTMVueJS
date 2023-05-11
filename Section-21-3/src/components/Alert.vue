<template>
  <div v-if="!flag" style="color: green">Name has Changed!</div>
</template>

<script>
import { computed } from "vue";

export default {
  props: ["user"],
  setup(props) {
    const flag = computed(() => {
      return props.user.name === "Joshua";
    });

    return {
      flag,
    };
  },
};
</script>
