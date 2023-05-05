<template>
    <app-form>
      <template v-slot:help>
        <p>{{ help }}</p>
      </template>

      <template v-slot:fields>
        <input type="email" placeholder="email"/>
        <input type="text" placeholder="username"/>
        <input type="password" placeholder="password"/>
      </template>

      <template v-slot:buttons>
        <button type="submit">Submit</button>
      </template>

      <p>Dummy Text</p>
    </app-form>
    
    <app-form>
      <template v-slot:help>
        <p>Contact some help text.</p>
      </template>

      <template v-slot:fields>
        <input type="text" placeholder="name"/>
        <textarea type="text" placeholder="enter your message here"/>
      </template>

      <template v-slot:buttons>
        <button type="submit">Submit</button>
      </template>
    </app-form>
</template>

<script>
  import AppForm from "./components/Form.vue";

  export default {
    name: "App",
    components: {
      AppForm,
    },
    data() {
      return {
        help: "This is some help text."
      }
    }
  }
</script>