<script lang="ts">
import AuthForm from "./components/AuthForm.vue";
import Sidebar from "./components/Sidebar.vue";
import Tables from "./components/Tables.vue";

export default {
  components: {Tables, Sidebar, AuthForm },
};
</script>

<template>
  <AuthForm class="auth" />
  <Sidebar />
  <Tables />
</template>

<style scoped>
.auth {
  display: none;
}
</style>
