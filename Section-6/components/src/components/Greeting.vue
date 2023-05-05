<template>
    <p v-if="age > 25">{{ msg }}</p>
    <p v-else>
      You must be {{ age }} years or older to view this content.
    </p>
</template>

<script>
    export default {
    name: "Greeting",
    props: [
      "age"
    ],
    data() {
      return {
        msg: "Hi, Joshua Berrios!"
      }
    }
  }
</script>

<style scoped lang="scss">
    p {
        color: darken(rgb(0, 219, 0), 15%);
    }
</style>