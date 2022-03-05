<template>
  <div>Hello World!<Button /></div>
</template>

<script lang="ts">
import Vue from "vue";
import Button from "./Button.vue";

export default Vue.extend({
  components: {
    Button,
  },
});
</script>
